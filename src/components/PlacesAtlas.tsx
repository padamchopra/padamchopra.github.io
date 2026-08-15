import { useEffect, useMemo, useRef, useState } from "react"
import { places, type PlaceGroup } from "@/data/places"
import {
  MAP_HEIGHT,
  MAP_LAT_MAX,
  MAP_LAT_MIN,
  MAP_WIDTH,
  worldLandPaths,
} from "@/data/worldLand"

type Marker = {
  key: string
  country: string
  label: string
  lat: number
  lng: number
}

type View = { k: number; x: number; y: number }

const MIN_K = 1
const MAX_K = 8

function markersFor(groups: PlaceGroup[]): Marker[] {
  return groups.flatMap((group) => {
    if (group.cities.length === 0) {
      return [
        {
          key: group.country,
          country: group.country,
          label: group.country,
          lat: group.lat,
          lng: group.lng,
        },
      ]
    }
    return group.cities.map((city) => ({
      key: `${group.country}-${city.name}`,
      country: group.country,
      label: city.name,
      lat: city.lat,
      lng: city.lng,
    }))
  })
}

function toXY(lat: number, lng: number) {
  return {
    x: ((lng + 180) / 360) * MAP_WIDTH,
    y: ((MAP_LAT_MAX - lat) / (MAP_LAT_MAX - MAP_LAT_MIN)) * MAP_HEIGHT,
  }
}

function graticule() {
  const lines: { d: string; key: string }[] = []
  for (let lng = -150; lng <= 150; lng += 30) {
    const a = toXY(MAP_LAT_MAX, lng)
    const b = toXY(MAP_LAT_MIN, lng)
    lines.push({ key: `lng-${lng}`, d: `M${a.x} ${a.y}L${b.x} ${b.y}` })
  }
  for (let lat = -30; lat <= 60; lat += 30) {
    const a = toXY(lat, -180)
    const b = toXY(lat, 180)
    lines.push({ key: `lat-${lat}`, d: `M${a.x} ${a.y}L${b.x} ${b.y}` })
  }
  return lines
}

function clampView(view: View): View {
  const k = Math.min(MAX_K, Math.max(MIN_K, view.k))
  return {
    k,
    x: Math.min(0, Math.max(MAP_WIDTH - MAP_WIDTH * k, view.x)),
    y: Math.min(0, Math.max(MAP_HEIGHT - MAP_HEIGHT * k, view.y)),
  }
}

function zoomAt(view: View, px: number, py: number, factor: number): View {
  const nextK = Math.min(MAX_K, Math.max(MIN_K, view.k * factor))
  const t = nextK / view.k
  return clampView({
    k: nextK,
    x: px - (px - view.x) * t,
    y: py - (py - view.y) * t,
  })
}

function pointerSvg(svg: SVGSVGElement, clientX: number, clientY: number) {
  const pt = svg.createSVGPoint()
  pt.x = clientX
  pt.y = clientY
  const ctm = svg.getScreenCTM()
  if (!ctm) return { x: 0, y: 0 }
  const mapped = pt.matrixTransform(ctm.inverse())
  return { x: mapped.x, y: mapped.y }
}

export default function PlacesAtlas() {
  const svgRef = useRef<SVGSVGElement>(null)
  const viewRef = useRef<View>({ k: 1, x: 0, y: 0 })
  const dragRef = useRef<{ x: number; y: number; vx: number; vy: number } | null>(null)
  const gestureRef = useRef(1)
  const [view, setView] = useState<View>({ k: 1, x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const [hoverCity, setHoverCity] = useState<string | null>(null)
  const markers = useMemo(() => markersFor(places), [])
  const grid = useMemo(() => graticule(), [])

  const applyView = (next: View) => {
    viewRef.current = next
    setView(next)
  }

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      const point = pointerSvg(svg, event.clientX, event.clientY)
      const current = viewRef.current
      if (event.ctrlKey || event.metaKey) {
        applyView(zoomAt(current, point.x, point.y, Math.exp(-event.deltaY * 0.012)))
        return
      }
      const box = svg.getBoundingClientRect()
      const sx = MAP_WIDTH / box.width
      const sy = MAP_HEIGHT / box.height
      applyView(
        clampView({
          k: current.k,
          x: current.x - event.deltaX * sx,
          y: current.y - event.deltaY * sy,
        }),
      )
    }

    const onGestureStart = (event: Event) => {
      event.preventDefault()
      gestureRef.current = viewRef.current.k
    }

    const onGestureChange = (event: Event) => {
      event.preventDefault()
      const gesture = event as Event & { scale?: number; clientX?: number; clientY?: number }
      const scale = gesture.scale ?? 1
      const point = pointerSvg(svg, gesture.clientX ?? 0, gesture.clientY ?? 0)
      const factor = (gestureRef.current * scale) / viewRef.current.k
      applyView(zoomAt(viewRef.current, point.x, point.y, factor))
    }

    svg.addEventListener("wheel", onWheel, { passive: false })
    svg.addEventListener("gesturestart", onGestureStart, { passive: false })
    svg.addEventListener("gesturechange", onGestureChange, { passive: false })
    svg.addEventListener("gestureend", onGestureStart, { passive: false })
    return () => {
      svg.removeEventListener("wheel", onWheel)
      svg.removeEventListener("gesturestart", onGestureStart)
      svg.removeEventListener("gesturechange", onGestureChange)
      svg.removeEventListener("gestureend", onGestureStart)
    }
  }, [])

  const inv = 1 / view.k

  return (
    <>
      <svg
        ref={svgRef}
        className={dragging ? "v-atlas is-grabbing" : "v-atlas"}
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        role="img"
        aria-label="World map of places I’ve been. Pinch to zoom, drag to pan."
        onPointerDown={(event) => {
          if (event.button !== 0) return
          ;(event.currentTarget as SVGSVGElement).setPointerCapture(event.pointerId)
          dragRef.current = {
            x: event.clientX,
            y: event.clientY,
            vx: viewRef.current.x,
            vy: viewRef.current.y,
          }
        }}
        onPointerMove={(event) => {
          const drag = dragRef.current
          const svg = svgRef.current
          if (!drag || !svg) return
          const dx = event.clientX - drag.x
          const dy = event.clientY - drag.y
          if (!dragging && dx * dx + dy * dy < 16) return
          if (!dragging) setDragging(true)
          const box = svg.getBoundingClientRect()
          applyView(
            clampView({
              k: viewRef.current.k,
              x: drag.vx + dx * (MAP_WIDTH / box.width),
              y: drag.vy + dy * (MAP_HEIGHT / box.height),
            }),
          )
        }}
        onPointerUp={() => {
          dragRef.current = null
          setDragging(false)
        }}
        onPointerCancel={() => {
          dragRef.current = null
          setDragging(false)
        }}
        onDoubleClick={(event) => {
          const svg = svgRef.current
          if (!svg) return
          const point = pointerSvg(svg, event.clientX, event.clientY)
          applyView(
            viewRef.current.k > 3
              ? { k: 1, x: 0, y: 0 }
              : zoomAt(viewRef.current, point.x, point.y, 1.8),
          )
        }}
      >
        <g transform={`translate(${view.x} ${view.y}) scale(${view.k})`}>
          {grid.map((line) => (
            <path key={line.key} className="v-atlas-grid" d={line.d} />
          ))}
          {worldLandPaths.map((d, index) => (
            <path key={index} className="v-atlas-land" d={d} />
          ))}
          {markers.map((marker) => {
            const { x, y } = toXY(marker.lat, marker.lng)
            const on = active === marker.country
            const cityOn = hoverCity === marker.key
            return (
              <g key={marker.key}>
                <circle
                  className="v-atlas-hit"
                  cx={x}
                  cy={y}
                  r={14 * inv}
                  onMouseEnter={() => {
                    if (dragging) return
                    setActive(marker.country)
                    setHoverCity(marker.key)
                  }}
                  onMouseLeave={() => {
                    setActive(null)
                    setHoverCity(null)
                  }}
                  onFocus={() => {
                    setActive(marker.country)
                    setHoverCity(marker.key)
                  }}
                  onBlur={() => {
                    setActive(null)
                    setHoverCity(null)
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${marker.label}, ${marker.country}`}
                  aria-pressed={cityOn}
                />
                <circle
                  className={on ? "v-atlas-dot is-on" : "v-atlas-dot"}
                  cx={x}
                  cy={y}
                  r={(cityOn ? 4.2 : 2.8) * inv}
                />
              </g>
            )
          })}
        </g>
        {markers.map((marker) => {
          if (hoverCity !== marker.key) return null
          const point = toXY(marker.lat, marker.lng)
          const x = point.x * view.k + view.x
          const y = point.y * view.k + view.y
          return (
            <text
              key={`${marker.key}-label`}
              className="v-atlas-label"
              x={x}
              y={y < 24 ? y + 18 : y - 10}
              textAnchor="middle"
            >
              {marker.label}
            </text>
          )
        })}
        {active ? (
          <text className="v-atlas-legend" x="12" y={MAP_HEIGHT - 12}>
            {active}
          </text>
        ) : null}
      </svg>
      <ul className="v-recs v-place-list">
        {places.map((place) => {
          const on = active === place.country
          return (
            <li
              key={place.country}
              onMouseEnter={() => setActive(place.country)}
              onMouseLeave={() => {
                setActive(null)
                setHoverCity(null)
              }}
            >
              <button
                type="button"
                className={on ? "v-place-btn is-on" : "v-place-btn"}
                onFocus={() => setActive(place.country)}
                onBlur={() => setActive(null)}
              >
                {place.country}
              </button>
              {place.cities.length > 0 ? (
                <span className={on ? "v-role is-on" : "v-role"}>
                  {place.cities.map((city) => city.name).join(", ")}
                </span>
              ) : null}
            </li>
          )
        })}
      </ul>
    </>
  )
}
