import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react"

const STORAGE = "notes-pane-width"
const DEFAULT = 420
const MIN_LIST = 260
const MIN_READ = 340
const HANDLE = 12

function clamp(width: number, wrap: number, hasReader: boolean) {
  const minRead = hasReader ? MIN_READ : 0
  const max = Math.max(MIN_LIST, wrap - minRead - HANDLE)
  return Math.min(max, Math.max(MIN_LIST, width))
}

export default function NotesSplit({
  hasReader,
  list,
  reader,
}: {
  hasReader: boolean
  list: ReactNode
  reader: ReactNode
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const drag = useRef<{ x: number; width: number } | null>(null)
  const widthRef = useRef(DEFAULT)
  const [width, setWidth] = useState(DEFAULT)
  const [dragging, setDragging] = useState(false)

  function setListWidth(next: number) {
    widthRef.current = next
    setWidth(next)
  }

  function saveWidth() {
    try {
      window.localStorage.setItem(STORAGE, String(Math.round(widthRef.current)))
    } catch {
      // ignore blocked storage
    }
  }

  useEffect(() => {
    try {
      const saved = Number(window.localStorage.getItem(STORAGE))
      if (Number.isFinite(saved) && saved > 0) setListWidth(saved)
    } catch {
      // ignore blocked storage
    }
  }, [])

  useEffect(() => {
    const apply = () => {
      const wrap = wrapRef.current?.getBoundingClientRect().width ?? 0
      if (wrap) setListWidth(clamp(widthRef.current, wrap, hasReader))
    }
    apply()
    window.addEventListener("resize", apply)
    return () => window.removeEventListener("resize", apply)
  }, [hasReader])

  useEffect(() => {
    if (!dragging) return
    const previous = document.body.style.userSelect
    const cursor = document.body.style.cursor
    document.body.style.userSelect = "none"
    document.body.style.cursor = "col-resize"
    return () => {
      document.body.style.userSelect = previous
      document.body.style.cursor = cursor
    }
  }, [dragging])

  function onPointerDown(event: PointerEvent<HTMLButtonElement>) {
    event.preventDefault()
    drag.current = { x: event.clientX, width: widthRef.current }
    setDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function onPointerMove(event: PointerEvent<HTMLButtonElement>) {
    if (!drag.current) return
    const wrap = wrapRef.current?.getBoundingClientRect().width ?? 0
    setListWidth(clamp(drag.current.width + (event.clientX - drag.current.x), wrap, hasReader))
  }

  function onPointerUp(event: PointerEvent<HTMLButtonElement>) {
    if (!drag.current) return
    drag.current = null
    setDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    saveWidth()
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const wrap = wrapRef.current?.getBoundingClientRect().width ?? 0
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      setListWidth(clamp(widthRef.current - 24, wrap, hasReader))
      saveWidth()
    }
    if (event.key === "ArrowRight") {
      event.preventDefault()
      setListWidth(clamp(widthRef.current + 24, wrap, hasReader))
      saveWidth()
    }
  }

  return (
    <div
      ref={wrapRef}
      className={[
        "v-notes",
        hasReader ? "is-open" : "",
        dragging ? "is-dragging" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--notes-list": `${width}px` } as CSSProperties}
    >
      <div className="v-notes-index">{list}</div>
      <button
        type="button"
        className="v-notes-split"
        aria-label="Resize notes"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      />
      {hasReader && reader ? <div className="v-notes-read">{reader}</div> : null}
    </div>
  )
}
