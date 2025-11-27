import React, { useState, useRef } from 'react';
import { Trash2, CheckCircle } from 'lucide-react';

interface SwipeableRowProps {
  children: React.ReactNode;
  onDelete: () => void;
  bgClassName?: string;
}

export const SwipeableRow: React.FC<SwipeableRowProps> = ({ children, onDelete, bgClassName = "bg-white" }) => {
  const [offset, setOffset] = useState(0);
  const startX = useRef<number | null>(null);
  const threshold = 100; // px to trigger delete

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX.current;
    // Only allow swiping left (negative diff)
    if (diff < 0) {
        setOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    if (offset < -threshold) {
      onDelete();
      setOffset(0); // Reset for visual feedback, usually item is removed by parent
    } else {
      setOffset(0);
    }
    startX.current = null;
  };

  return (
    <div className="relative overflow-hidden mb-3 rounded-xl shadow-sm">
      {/* Background Action Layer */}
      <div className="absolute inset-0 bg-emerald-100 flex items-center justify-end px-6">
        <div className="flex items-center space-x-2 text-emerald-700 font-bold">
            <CheckCircle size={24} />
            <span>Mastered</span>
        </div>
      </div>

      {/* Foreground Content Layer */}
      <div
        className={`relative ${bgClassName} transition-transform duration-200 ease-out`}
        style={{ transform: `translateX(${offset}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
    </div>
  );
};