import { useMemo } from 'react'

const StarField = () => {
  const stars = useMemo(() => Array.from({ length: 150 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1.5 + Math.random() * 2.5,
    delay: Math.random() * 4,
  })), [])

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .star {
          animation: twinkle 3s infinite ease-in-out;
          background: white;
          border-radius: 50%;
          position: absolute;
        }
      `}</style>
      <div className="fixed inset-0 z-0 pointer-events-none">
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}

export default StarField
