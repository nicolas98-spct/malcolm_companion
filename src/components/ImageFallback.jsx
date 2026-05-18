import { useMemo, useState } from 'react';

export default function ImageFallback({ src, alt, label, className = '' }) {
  const [failed, setFailed] = useState(false);
  const initial = useMemo(() => (label || alt || '?').trim().charAt(0).toUpperCase() || '?', [label, alt]);

  if (!src || failed) {
    return (
      <div className={`image-fallback ${className}`} aria-label={alt || label || 'placeholder'}>
        <span className="image-fallback__initial">{initial}</span>
        <small className="image-fallback__brand">Malcolm Companion</small>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
}
