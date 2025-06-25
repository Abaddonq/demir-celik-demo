'use client';

import React from 'react';
import { useTheme } from '@/app/context/themeContext';

const issues = [
  {
    label: "2023 - Cilt: 4 Sayı: 2",
    url: "https://dergipark.org.tr/tr/pub/jesred/issue/81238",
  },
  {
    label: "2023 - Cilt: 4 Sayı: 1",
    url: "https://dergipark.org.tr/tr/pub/jesred/issue/79758",
  },
  {
    label: "2022 - Cilt: 3 Sayı: 2",
    url: "https://dergipark.org.tr/tr/pub/jesred/issue/74023",
  },
  {
    label: "2022 - Cilt: 3 Sayı: 1",
    url: "https://dergipark.org.tr/tr/pub/jesred/issue/72095",
  },
];

export default function RecentIssues() {
  const { theme } = useTheme();

  return (
    <div
      className="max-w-sm rounded shadow p-4 border"
      style={{ backgroundColor: theme.cardBackground || '#ffffff' }}
    >
      <h2
        className="text-lg font-semibold mb-4"
        style={{ color: theme.primaryColor || '#202b85' }}
      >
        Son Sayılar
      </h2>

      {issues.map((issue, index) => {
        const prevYear = index > 0 ? issues[index - 1].label.slice(0, 4) : null;
        const currYear = issue.label.slice(0, 4);
        const addDivider = prevYear && prevYear !== currYear;

        return (
          <div key={index}>
            {addDivider && <hr className="my-3" style={{ borderColor: theme.borderColor || '#ccc' }} />}
            <a
              href={issue.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-between items-center p-3 rounded-md mb-1 transition-all"
              style={{
                color: theme.primaryColor || '#202b85',
                transform: 'scale(1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme.secondaryColor || '#ff7f50';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme.primaryColor || '#202b85';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span className="transition-colors">{issue.label}</span>

              <div
                className="ml-4 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm transition-all"
                style={{
                  backgroundColor: theme.primaryColor || '#202b85',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.secondaryColor || '#ff7f50';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.primaryColor || '#202b85';
                }}
              >
                →
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
