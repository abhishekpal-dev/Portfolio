import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Skip all cursor logic on touch/coarse-pointer devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const cursor = cursorRef.current
    const ring = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = e => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    const intervalId = setInterval(() => {
      rx += (mx - rx) * 0.50
      ry += (my - ry) * 0.50
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
    }, 16)

    const onEnter = e => {
      if (e.target.closest('a, button, .skill-chip, .highlight-item')) {
        cursor.style.width = '20px'
        cursor.style.height = '20px'
      }
    }
    const onLeave = e => {
      if (e.target.closest('a, button, .skill-chip, .highlight-item')) {
        cursor.style.width = '12px'
        cursor.style.height = '12px'
      }
    }
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
