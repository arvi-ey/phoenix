'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) =>
      setCursor({ x: event.clientX, y: event.clientY })
    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <>
      <div
        aria-hidden="true"
        className="site-cursor"
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      />
      <div
        aria-hidden="true"
        className="site-cursor-dot"
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      />
    </>
  )
}
