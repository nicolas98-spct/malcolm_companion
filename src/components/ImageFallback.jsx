import { useState } from 'react';

export default function ImageFallback({ src, alt, label, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <div className={`image-fallback ${className}`}>{(label || '?')[0]}</div>;
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}
