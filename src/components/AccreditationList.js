// components/AccreditationList.tsx
'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function AccreditationList({ title, href, theme }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block group text-right"
    >
      <div className="flex justify-between items-center py-4 border-b transition-colors duration-300"
           style={{ borderColor: hovered ? theme?.underlineColor : '#eee' }}>
        <span className="text-lg font-semibold"
              style={{ color: theme?.textColor }}>
          {title}
        </span>
        <span className={`transition duration-300 text-xl`}
              style={{ color: hovered ? theme?.iconHoverColor : theme?.iconColor }}>
          ➜
        </span>
      </div>
    </Link>
  )
}
