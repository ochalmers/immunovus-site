function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Node = { id: number; x: number; y: number; r: number; delay: number; dx: number; dy: number };
type Edge = { a: number; b: number; len: number; delay: number };

function buildNetwork(width: number, height: number, seed = 42) {
  const rand = mulberry32(seed);
  const cx = width * 0.52;
  const cy = height * 0.5;
  const nodes: Node[] = [];

  const ring = 28;
  for (let i = 0; i < ring; i++) {
    const a = (i / ring) * Math.PI * 2 + rand() * 0.18;
    const rad = Math.min(width, height) * (0.28 + rand() * 0.08);
    nodes.push({
      id: nodes.length,
      x: cx + Math.cos(a) * rad,
      y: cy + Math.sin(a) * rad,
      r: 1.6 + rand() * 1.8,
      delay: 180 + i * 28,
      dx: (rand() - 0.5) * 90,
      dy: (rand() - 0.5) * 90,
    });
  }

  for (let i = 0; i < 18; i++) {
    const a = rand() * Math.PI * 2;
    const rad = Math.min(width, height) * rand() * 0.22;
    nodes.push({
      id: nodes.length,
      x: cx + Math.cos(a) * rad,
      y: cy + Math.sin(a) * rad,
      r: 1.2 + rand() * 1.4,
      delay: 80 + i * 40,
      dx: (rand() - 0.5) * 70,
      dy: (rand() - 0.5) * 70,
    });
  }

  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2 + 0.2;
    const rad = Math.min(width, height) * (0.4 + rand() * 0.06);
    nodes.push({
      id: nodes.length,
      x: cx + Math.cos(a) * rad * (0.85 + rand() * 0.3),
      y: cy + Math.sin(a) * rad * (0.72 + rand() * 0.28),
      r: 1.1 + rand(),
      delay: 400 + i * 35,
      dx: (rand() - 0.5) * 120,
      dy: (rand() - 0.5) * 110,
    });
  }

  const edges: Edge[] = [];
  const maxDist = Math.min(width, height) * 0.16;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const d = Math.hypot(dx, dy);
      if (d < maxDist && rand() > 0.28) {
        edges.push({ a: i, b: j, len: d, delay: 520 + edges.length * 12 });
      }
    }
  }

  return { nodes, edges };
}

export function NetworkField({
  className = "",
  idPrefix = "net",
}: {
  className?: string;
  idPrefix?: string;
}) {
  const width = 900;
  const height = 720;
  const { nodes, edges } = buildNetwork(width, height);
  const glowId = `${idPrefix}-glow`;
  const strokeId = `${idPrefix}-stroke`;

  return (
    <svg
      className={`network-field ${className}`}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      role="img"
      aria-label="Immune system resolving from scattered signals into an organised biological network"
    >
      <defs>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#03FFF6" stopOpacity="0.22" />
          <stop offset="55%" stopColor="#306462" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0E1A1A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={strokeId} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#03FFF6" />
          <stop offset="0.5" stopColor="#03D0CB" />
          <stop offset="1" stopColor="#306462" />
        </linearGradient>
      </defs>
      <rect width={width} height={height} fill={`url(#${glowId})`} />
      {edges.map((e, i) => {
        const a = nodes[e.a];
        const b = nodes[e.b];
        return (
          <line
            key={i}
            className="network-edge"
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={`url(#${strokeId})`}
            strokeWidth="0.7"
            strokeDasharray={e.len}
            style={
              {
                "--len": e.len,
                animationDelay: `${e.delay}ms`,
              } as React.CSSProperties
            }
          />
        );
      })}
      {nodes.map((n) => (
        <circle
          key={n.id}
          className={n.r > 2.4 ? "network-node network-node-pulse" : "network-node"}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={n.r > 2.4 ? "#03FFF6" : "#03D0CB"}
          style={
            {
              "--dx": `${n.dx}px`,
              "--dy": `${n.dy}px`,
              animationDelay: `${n.delay}ms`,
            } as React.CSSProperties
          }
        />
      ))}
    </svg>
  );
}
