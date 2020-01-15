import React, { type Node, useRef, useEffect } from 'react'

type ClickOutsideProps = {
  onClickOutisde: () => void,
  useEscapeKey: Boolean,
  children: Node,
  className?: string,
}

export default (props: ClickOutsideProps) => {
  const { children, onClickOutisde, useEscapeKey = true, className } = props
  const outRef = useRef()

  const handleClickOutside = e => {
    if (outRef.current && !outRef.current.contains(e.target)) {
      onClickOutisde()
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Escape') onClickOutisde()
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    if (useEscapeKey) document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (useEscapeKey) document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <div ref={outRef} className={className}>
      {children}
    </div>
  )
}
