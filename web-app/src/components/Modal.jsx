// Shared modal wrapper — handles backdrop, keyboard (Escape), and aria props
import { useEffect } from 'react'

export default function Modal({ id, label, children, onClose, size = 'max-w-4xl' }) {
  useEffect(() => {
    const prev = document.activeElement
    const close = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', close)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', close)
      document.body.style.overflow = ''
      prev?.focus()
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60"
      onClick={onClose}
      role="presentation"
    >
      <div
        className={`bg-gray-800 rounded-lg border border-gray-700 w-full ${size} max-h-[90vh] overflow-hidden flex flex-col`}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        id={id}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
