// src/web-vitals.d.ts
declare module 'web-vitals' {
    export function getCLS(callback: (metric: any) => void): void;
    export function getFCP(callback: (metric: any) => void): void;
    export function getFID(callback: (metric: any) => void): void;
    export function getLCP(callback: (metric: any) => void): void;
    export function getTTFB(callback: (metric: any) => void): void;
  }
  