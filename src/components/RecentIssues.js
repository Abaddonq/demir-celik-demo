'use client';

import React from 'react';

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
  return (
    <div className="max-w-sm bg-white rounded shadow p-4 border">
      <h2 className="text-lg font-semibold text-blue-900 mb-4">Son Sayılar</h2>

      {issues.map((issue, index) => {
        const prevYear = index > 0 ? issues[index - 1].label.slice(0, 4) : null;
        const currYear = issue.label.slice(0, 4);
        const addDivider = prevYear && prevYear !== currYear;

        return (
          <div key={index}>
            {addDivider && <hr className="my-3 border-gray-300" />}
            <a
              href={issue.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-between items-center p-3 rounded-md mb-1 transition-all text-blue-900 hover:text-orange-600"
            >
              <span className="transition-colors">{issue.label}</span>

              {/* Ok simgesi — metinle arasında makul boşluk */}
              <div className="ml-4 w-6 h-6 rounded-full flex items-center justify-center bg-indigo-900 text-white text-sm group-hover:bg-orange-500 transition-all">
                →
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
