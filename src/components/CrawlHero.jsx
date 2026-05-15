import { useState, useEffect } from "react";

export default function CrawlHero() {
  const [phase, setPhase] = useState("logo");
  const [loopKey, setLoopKey] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [logoScale, setLogoScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Mobile gets shorter timings — less to read, smaller screen
  const crawlDuration = isMobile ? 25000 : 40000;
  const crawlDurationS = isMobile ? 25 : 40;

  useEffect(() => {
    let timer;
    if (phase === "logo") {
      timer = setTimeout(() => setPhase("shrink"), 3000);       // logo shows for 3s on all screens
    } else if (phase === "shrink") {
      timer = setTimeout(() => setPhase("crawl"), 1200);        // shrink transition 1.2s
    } else if (phase === "crawl") {
      timer = setTimeout(() => setPhase("pause"), crawlDuration);
    } else if (phase === "pause") {
      timer = setTimeout(() => {
        setLogoScale(1);
        setLoopKey(k => k + 1);
        setPhase("logo");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [phase, crawlDuration]);

  useEffect(() => {
    setLogoOpacity(0);
    const t = setTimeout(() => setLogoOpacity(1), 60);
    return () => clearTimeout(t);
  }, [loopKey]);

  useEffect(() => {
    if (phase === "shrink") {
      setLogoOpacity(0);
      setLogoScale(0.05);
    }
  }, [phase]);

  const isShrinking = phase === "shrink" || phase === "crawl";

  return (
    <div style={{
      position: "relative",
      height: "100svh",
      background: "transparent",
      overflow: "hidden",
    }}>
      {phase !== "pause" && (
        <div
          key={loopKey}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${logoScale})`,
            opacity: logoOpacity,
            transition: isShrinking
              ? "transform 2s ease, opacity 1s ease"
              : "opacity 1s ease",
            textAlign: "center",
            color: "#f0c040",
            fontFamily: "'Pathway Gothic One', sans-serif",
            whiteSpace: "nowrap",
            zIndex: 10,
            width: "90vw",
          }}
        >
          <p style={{
            fontSize: "clamp(1.6rem, 8vw, 6rem)",
            letterSpacing: "clamp(0.08em, 2vw, 0.35em)",
            marginBottom: "12px",
            color: "transparent",
            WebkitTextStroke: "clamp(1px, 0.3vw, 3px) #f0c040",
          }}>
            SARA HODAEI
          </p>
          <p style={{
            fontSize: "clamp(0.75rem, 3vw, 1.8rem)",
            letterSpacing: "clamp(0.08em, 1.5vw, 0.35em)",
            margin: 0,
            textTransform: "uppercase",
          }}>
            DATA SCIENTIST
          </p>
        </div>
      )}

      {phase === "crawl" && (
        <div style={{
          position: "absolute",
          inset: 0,
          perspective: isMobile ? "250px" : "400px",
          overflow: "hidden",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}>
          <div
            key={loopKey}
            style={{
              position: "absolute",
              bottom: 0,
              width: isMobile ? "92vw" : "min(55%, 680px)",
              padding: "0 16px",
              textAlign: "center",
              transformOrigin: "50% 50%",
              animation: `crawlUp ${crawlDurationS}s linear forwards`,
              color: "#f0c040",
              fontFamily: "'Pathway Gothic One', sans-serif",
            }}
          >
            <p style={{
              fontSize: isMobile ? "0.95rem" : "clamp(0.85rem, 2.2vw, 1.2rem)",
              fontStyle: "italic",
              lineHeight: isMobile ? 1.8 : 2,
              marginBottom: isMobile ? "24px" : "32px",
              textAlign: "left",
            }}>
              A long time ago, in a galaxy governed by mathematics... It started with a simple conviction that the universe is not random. That beneath every collision, every orbit, every chaotic system, there is order. Rules. A geometry that holds everything in place. Physics was the pursuit of that order. Years spent learning to describe reality in the language it actually speaks. Equations that predict where a particle will be before it gets there. Models that compress the behaviour of entire systems into a handful of variables. The thrill was never the answer. It was the moment a pattern clicked into place. That thrill turned out to be transferable.
            </p>
            <p style={{
              fontSize: isMobile ? "0.95rem" : "clamp(0.85rem, 2.2vw, 1.2rem)",
              fontStyle: "italic",
              lineHeight: isMobile ? 1.8 : 2,
              marginBottom: isMobile ? "24px" : "32px",
              textAlign: "left",
            }}>
              Data is just another universe. Messier, higher-dimensional, and significantly less well-behaved. But governed by the same fundamental idea. That if you look carefully enough, ask the right questions, and build the right model, the chaos starts to make sense. The equations changed shape. Differential systems became Transformer architectures. Experimental models became learning algorithms. Attention mechanisms, pointer networks, probabilistic models, embeddings that compress meaning into vectors. Each one a different lens trained on the same question. Rebellions are built on hope. Good science is built on evidence. The best work sits somewhere in between. Bold enough to attempt the difficult, rigorous enough to know when it is wrong. The galaxy is full of patterns waiting to be found.
            </p>
            <p style={{
              fontSize: isMobile ? "1rem" : "clamp(1rem, 2.5vw, 1.4rem)",
              fontWeight: "bold",
              fontStyle: "normal",
              lineHeight: 1.8,
              marginBottom: "24px",
              textAlign: "center",
              letterSpacing: "0.1em",
            }}>
              Do or do not. There is no baseline.
            </p>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');
        @keyframes crawlUp {
          from { transform: rotateX(25deg) translateY(100vh); }
          to   { transform: rotateX(25deg) translateY(-320%); }
        }
        @media (max-width: 640px) {
          @keyframes crawlUp {
            from { transform: rotateX(18deg) translateY(100vh); }
            to   { transform: rotateX(18deg) translateY(-320%); }
          }
        }
      `}</style>
    </div>
  );
}