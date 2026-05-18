import { useMemo, useState } from 'react';

const BLOCKED_HOSTS = ['imgur.com', 'i.imgur.com', 'example.com'];

function isBlockedSource(src = '') {
  const normalized = src.toLowerCase();
  return BLOCKED_HOSTS.some((host) => normalized.includes(host));
}

export default function ImageFallback({ src, alt, label, className = '', variant = 'card' }) {
  const [failed, setFailed] = useState(false);
  const initial = useMemo(() => (label || alt || '?').trim().charAt(0).toUpperCase() || '?', [label, alt]);
  const shouldUseFallback = !src || failed || isBlockedSource(src);

  if (shouldUseFallback) {
    return (
      <div className={`image-fallback image-${variant} ${className}`} aria-label={alt || label || 'placeholder'}>
        <span className="image-fallback__initial">{initial}</span>
        <small className="image-fallback__brand">Malcolm Companion</small>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`image-${variant} ${className}`}
      onError={() => setFailed(true)}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}
