import React from 'react';

/**
 * StellaDev "Woven Prism" 브랜드 마크.
 * 두 사각형이 8개 교차점에서만 번갈아 위/아래로 엮이는 지오메트리로,
 * assets/StellaDev-Woven-vector 의 벡터 원본과 좌표가 동일하다.
 */

const FRAME_POLYGONS = [
  '70.09,20.28 79.72,20.28 79.72,60.47 83.92,56.27 83.92,16.08 65.89,16.08',
  '79.72,70.09 79.72,79.72 39.53,79.72 43.73,83.92 83.92,83.92 83.92,65.89',
  '29.91,79.72 20.28,79.72 20.28,39.53 16.08,43.73 16.08,83.92 34.11,83.92',
  '20.28,29.91 20.28,20.28 60.47,20.28 56.27,16.08 16.08,16.08 16.08,34.11',
];

const PRISM_POLYGONS = [
  '85.22,43.19 92.03,50.00 63.61,78.42 69.55,78.42 97.97,50.00 85.22,37.25',
  '56.81,85.22 50.00,92.03 21.58,63.61 21.58,69.55 50.00,97.97 62.75,85.22',
  '14.78,56.81 7.97,50.00 36.39,21.58 30.45,21.58 2.03,50.00 14.78,62.75',
  '43.19,14.78 50.00,7.97 78.42,36.39 78.42,30.45 50.00,2.03 37.25,14.78',
];

interface SymbolProps {
  className?: string;
  /** 엮인 사각 프레임 색. 다크 배경 기본값은 Paper. */
  frame?: string;
  /** 회전한 프리즘 색. 다크 배경 기본값은 Glow. */
  prism?: string;
  title?: string;
}

export function StellaSymbol({
  className,
  frame = '#F4F4F2',
  prism = '#7B87FF',
  title,
}: SymbolProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {FRAME_POLYGONS.map((points) => (
        <polygon key={points} points={points} fill={frame} />
      ))}
      {PRISM_POLYGONS.map((points) => (
        <polygon key={points} points={points} fill={prism} />
      ))}
    </svg>
  );
}

interface WordmarkProps {
  className?: string;
}

/** "Stella"는 라이트, "Dev"는 볼드 — 락업 원본의 웨이트 대비를 그대로 따른다. */
export function StellaWordmark({ className }: WordmarkProps) {
  return (
    <span className={`font-brand tracking-tight leading-none ${className ?? ''}`}>
      <span className="font-normal">Stella</span>
      <span className="font-bold">Dev</span>
    </span>
  );
}

interface LockupProps {
  className?: string;
  symbolClassName?: string;
  wordmarkClassName?: string;
  frame?: string;
  prism?: string;
}

export function StellaLockup({
  className,
  symbolClassName = 'h-8 w-8',
  wordmarkClassName = 'text-xl',
  frame,
  prism,
}: LockupProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <StellaSymbol className={symbolClassName} frame={frame} prism={prism} />
      <StellaWordmark className={wordmarkClassName} />
    </span>
  );
}
