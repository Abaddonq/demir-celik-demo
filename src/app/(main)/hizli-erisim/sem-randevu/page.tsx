'use client';
import React, { useRef, useState } from 'react';

const months = [
  { name: 'Ocak', image: '/images/ocak.png' },
  { name: 'Şubat', image: '/images/şubat.png' },
  { name: 'Mart', image: '/images/mart.png' },
  { name: 'Nisan', image: '/images/nisan.png' },
  { name: 'Mayıs', image: '/images/mayis.png' },
  { name: 'Haziran', image: '/images/haziran.png' },
];

function ZoomPanImage({ src, alt, scale, setScale, position, setPosition }: {
  src: string;
  alt: string;
  scale: number;
  setScale: React.Dispatch<React.SetStateAction<number>>;
  position: { x: number; y: number };
  setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
}) {
  const [dragging, setDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    lastPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - lastPos.current.x,
      y: e.clientY - lastPos.current.y,
    });
  };
  const handleMouseUp = () => setDragging(false);

  return (
    <div
      className="overflow-auto border rounded bg-white dark:bg-gray-800 flex justify-center items-center"
      style={{ width: '100%', maxHeight: 800, cursor: dragging ? 'grabbing' : 'grab', minHeight: 400 }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transition: dragging ? 'none' : 'transform 0.2s',
          userSelect: 'none',
          pointerEvents: 'all',
          maxWidth: '100%',
          maxHeight: 800,
        }}
        className="block"
      />
    </div>
  );
}

export default function SemRandevuPage() {
  const [selectedMonth, setSelectedMonth] = useState(months[0].image);
  const [scale, setScale] = useState(1.5);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.2, 3));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.2, 0.5));
  const handleReset = () => {
    setScale(1.5);
    setPosition({ x: 0, y: 100 });
  };

  // Ay değişince zoom ve pan sıfırlansın
  React.useEffect(() => {
    setScale(1.5);
    setPosition({ x: 0, y: 100 });
  }, [selectedMonth]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-[#202b85] mb-10">
        SEM Randevu Takvimi (Ocak - Haziran)
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {months.map((month) => (
          <button
            key={month.name}
            onClick={() => setSelectedMonth(month.image)}
            className={`px-4 py-2 rounded font-semibold border ${
              selectedMonth === month.image
                ? 'bg-[#202b85] text-white border-[#202b85]'
                : 'bg-white text-[#202b85] border-gray-300 hover:bg-gray-200'
            } transition`}
          >
            {month.name}
          </button>
        ))}
      </div>
      {/* Zoom butonları üstte */}
      <div className="flex justify-center gap-2 mb-6">
        <button onClick={handleZoomOut} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
        <button onClick={handleReset} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">Reset</button>
        <button onClick={handleZoomIn} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
      </div>
      <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded shadow p-4 flex justify-center">
        <ZoomPanImage src={selectedMonth} alt="Ay Takvimi" scale={scale} setScale={setScale} position={position} setPosition={setPosition} />
      </div>
    </div>
  );
}