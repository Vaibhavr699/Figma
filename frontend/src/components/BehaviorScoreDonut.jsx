import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Helper to render 40 ticks
function Ticks({ count = 40, radius = 48, tickLength = 18, color = '#BCB3DF', tickWidth = 1.5, tickRadius = 1 }) {
  // tickLength: how long the rectangle is (from outer to inner)
  // tickWidth: how thick the rectangle is (perpendicular to radius)
  // tickRadius: border radius for rounded ends
  const ticks = [];
  for (let i = 0; i < count; i++) {
    // Start from 12 o'clock
    const angle = (360 / count) * i - 90;
    const rad = (angle * Math.PI) / 180;
    // Center of the rectangle (at the outer edge)
    const cx = 50 + (radius - tickLength / 2) * Math.cos(rad);
    const cy = 50 + (radius - tickLength / 2) * Math.sin(rad);
    // Rectangle is centered at (cx, cy), rotated by angle
    ticks.push(
      <rect
        key={i}
        x={-tickLength / 2}
        y={-tickWidth / 2}
        width={tickLength}
        height={tickWidth}
        rx={tickRadius}
        fill={color}
        opacity={0.5}
        transform={`translate(${cx},${cy}) rotate(${angle})`}
      />
    );
  }
  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}>
      {ticks}
    </svg>
  );
}

const ScoreDonut = ({
  value = 55,
  label = 'Score',
  gradient = ["#CF3393", "#FF94D6"],
  gradientId = 'scoreGradient',
  tickColor = '#BCB3DF',
  circleRatio = 0.75,
  background = '#F6F4FB',
  width = 240,
  height = 240,
}) => {
  return (
    <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-60 2xl:h-60" style={{ position: 'relative', background, borderRadius: '50%' }}>
      {/* Ticks background */}
      <Ticks color={tickColor} />
      {/* Donut chart */}
      <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
        <CircularProgressbarWithChildren
          value={value}
          strokeWidth={20}
          styles={buildStyles({
            pathColor: `url(#${gradientId})`,
            trailColor: 'transparent',
            strokeLinecap: 'butt', // Less rounded arc ends
            rotation: 0, // Start at 12 o'clock
          })}
          circleRatio={circleRatio}
        >
          {/* Gradient definition */}
          <svg style={{ height: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={gradient[0]} />
                <stop offset="100%" stopColor={gradient[1]} />
              </linearGradient>
            </defs>
          </svg>
          {/* Centered score and label */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            fontFamily: '"Wix Madefor Text", sans-serif',
            color: '#1C0A6B',
            zIndex: 2,
          }}>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl" style={{ fontWeight: 500, lineHeight: '100%' }}>{value}</div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" style={{ fontWeight: 500, lineHeight: '100%' }}>{label}</div>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default ScoreDonut; 