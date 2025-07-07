'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from '@/app/context/themeContext'

interface AccreditationListProps {
  title: string;
  href: string;
}

export default function AccreditationList({ title, href }: AccreditationListProps) {
  const [hovered, setHovered] = useState(false)
  const { theme } = useTheme()

  const {
    fontFamily = 'sans-serif',
    fontSizeBase = '16px',
    primaryColor = '#1e3a8a',
    secondaryColor = '#f97316',
    textColor = '#000000',
    iconColor = '#1e3a8a',
    iconHoverColor = '#f97316',
    underlineColor = '#eee',
  } = theme || {}

  const isExternal = href.startsWith('http')

  const content = (
    <div
      className="flex justify-between items-center py-4 border-b transition-colors duration-300"
      style={{
        borderColor: hovered ? secondaryColor : underlineColor,
        fontFamily,
        fontSize: fontSizeBase,
      }}
    >
      <span
        className="text-lg font-semibold"
        style={{ color: textColor }}
      >
        {title}
      </span>
      <span
        className="transition duration-300 text-xl"
        style={{ color: hovered ? iconHoverColor : iconColor }}
      >
        ➜
      </span>
    </div>
  )

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="block group text-right"
        style={{ fontFamily }}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="block group text-right cursor-pointer"
        style={{ fontFamily }}
      >
        {content}
      </div>
    </Link>
  )
}
