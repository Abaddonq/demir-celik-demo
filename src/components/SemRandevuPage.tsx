'use client'

import { useTheme } from '@/app/context/themeContext'

const months = ['Oca.25']

const timeSlots = ['10:00 - 11:00', '11:00 - 12:00', '14:00 - 15:00', '15:00 - 16:00']

const appointmentData = [
  {
    date: '1.01.2025',
    day: 'Çarşamba',
    slots: ['Yılbaşı Tatili', '', '', '']
  },
  {
    date: '2.01.2025',
    day: 'Perşembe',
    slots: ['DOLU', 'DOLU', 'DOLU', '']
  },
  {
    date: '3.01.2025',
    day: 'Cuma',
    slots: ['DOLU', 'DOLU', 'DOLU', '']
  },
  {
    date: '4.01.2025',
    day: 'Cumartesi',
    slots: ['', '', '', '']
  },
  {
    date: '5.01.2025',
    day: 'Pazar',
    slots: ['', '', '', '']
  },
  {
    date: '6.01.2025',
    day: 'Pazartesi',
    slots: ['BOŞ', 'BOŞ', 'BOŞ', 'BOŞ']
  },
  {
    date: '7.01.2025',
    day: 'Salı',
    slots: ['BOŞ', 'BOŞ', 'BOŞ', 'BOŞ']
  },
  {
    date: '8.01.2025',
    day: 'Çarşamba',
    slots: ['BOŞ', 'BOŞ', 'BOŞ', 'BOŞ']
  }
]

export default function SemRandevuPage() {
  const { theme } = useTheme()
  const {
    fontFamily = 'sans-serif',
    fontSizeBase = '16px',
    textColor = '#000'
  } = theme || {}

  return (
    <div
      className="p-6"
      style={{ fontFamily, fontSize: fontSizeBase, color: textColor }}
    >
      {months.map((month, index) => (
        <div key={index} className="mb-10 overflow-x-auto">
          <h2 className="text-xl font-bold mb-4 text-center">{month}</h2>

          <table className="w-full border border-black text-center text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2">İş Günleri</th>
                <th className="border border-black p-2">Gün</th>
                {timeSlots.map((slot, i) => (
                  <th key={i} className="border border-black p-2">{slot}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {appointmentData.map((row, i) => (
                <tr key={i}>
                  <td className="border border-black p-1 bg-blue-100 font-medium">{row.date}</td>
                  <td className="border border-black p-1 bg-blue-100">{row.day}</td>
                  {row.slots.map((slot, j) => {
                    let classes = 'border border-black p-1'
                    if (slot === 'DOLU') classes += ' bg-red-600 text-white font-bold'
                    else if (slot === 'BOŞ') classes += ' bg-green-500 text-white font-bold'
                    else if (slot.includes('Tatili')) classes += ' bg-gray-300 font-semibold'
                    return (
                      <td key={j} className={classes}>
                        {slot}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}
