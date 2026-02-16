import { useState } from "react";

const COLORS = {
  bg: "#FAFBFE",
  surface: "#FFFFFF",
  input: { bg: "#EFF6FF", border: "#3B82F6", text: "#1E40AF", accent: "#60A5FA" },
  detection: { bg: "#FFF7ED", border: "#F59E0B", text: "#92400E", accent: "#FBBF24" },
  tracking: { bg: "#ECFDF5", border: "#10B981", text: "#065F46", accent: "#34D399" },
  calibration: { bg: "#F5F3FF", border: "#8B5CF6", text: "#5B21B6", accent: "#A78BFA" },
  inference: { bg: "#FEF2F2", border: "#EF4444", text: "#991B1B", accent: "#F87171" },
  output: { bg: "#F0FDFA", border: "#14B8A6", text: "#134E4A", accent: "#2DD4BF" },
  fuzzy: { bg: "#D1FAE5", border: "#059669", text: "#065F46" },
  muted: "#94A3B8",
  mutedDark: "#64748B",
  line: "#CBD5E1",
  textPrimary: "#1E293B",
  textSecondary: "#475569",
};

export default function PipelineArchitecture() {
  const [hovered, setHovered] = useState(null);

  const Node = ({ id, x, y, w, h, color, title, subtitle, children, badge }) => {
    const isHovered = hovered === id;
    return (
      <g
        onMouseEnter={() => setHovered(id)}
        onMouseLeave={() => setHovered(null)}
        style={{ cursor: "default" }}
      >
        <defs>
          <filter id={`shadow-${id}`}>
            <feDropShadow dx="0" dy={isHovered ? 4 : 2} stdDeviation={isHovered ? 8 : 4} floodColor={color.border} floodOpacity={isHovered ? 0.18 : 0.08} />
          </filter>
        </defs>
        <rect
          x={x} y={y} width={w} height={h} rx="10" ry="10"
          fill={COLORS.surface}
          stroke={color.border}
          strokeWidth={isHovered ? 2 : 1.2}
          strokeOpacity={isHovered ? 1 : 0.5}
          filter={`url(#shadow-${id})`}
          style={{ transition: "all 0.25s ease" }}
        />
        <rect x={x} y={y} width={5} height={h} rx="3" fill={color.border} opacity={isHovered ? 1 : 0.7} style={{ transition: "opacity 0.25s ease" }} />
        {badge && (
          <>
            <rect x={x + w - 62} y={y + 10} width={50} height={20} rx="10" fill={color.bg} stroke={color.border} strokeWidth="0.8" strokeOpacity="0.4" />
            <text x={x + w - 37} y={y + 23} textAnchor="middle" fontSize="8.5" fontFamily="'SF Mono', 'Fira Code', 'Consolas', monospace" fill={color.text} fontWeight="600">{badge}</text>
          </>
        )}
        <text x={x + 18} y={y + (subtitle ? 24 : h / 2 + 5)} fontSize="13" fontFamily="'Segoe UI', 'SF Pro Display', system-ui, sans-serif" fontWeight="700" fill={COLORS.textPrimary} letterSpacing="0.2">{title}</text>
        {subtitle && (
          <text x={x + 18} y={y + 41} fontSize="10.5" fontFamily="'Segoe UI', system-ui, sans-serif" fontWeight="400" fill={COLORS.textSecondary}>{subtitle}</text>
        )}
        {children}
      </g>
    );
  };

  const Arrow = ({ points, color = COLORS.line, dashed = false }) => (
    <polyline points={points} fill="none" stroke={color} strokeWidth="1.6" strokeDasharray={dashed ? "6,4" : "none"} markerEnd={dashed ? "url(#arrowhead-dashed)" : "url(#arrowhead)"} strokeLinejoin="round" />
  );

  const CurvedArrow = ({ d, color = COLORS.line, dashed = false }) => (
    <path d={d} fill="none" stroke={color} strokeWidth="1.6" strokeDasharray={dashed ? "6,4" : "none"} markerEnd={dashed ? "url(#arrowhead-dashed)" : "url(#arrowhead)"} />
  );

  const PhaseLabel = ({ x, y, label, number }) => (
    <g>
      <text x={x} y={y} fontSize="20" fontFamily="'SF Mono', 'Fira Code', 'Consolas', monospace" fill={COLORS.line} fontWeight="800" textAnchor="end" letterSpacing="-1">{number}</text>
      <text x={x} y={y + 16} fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif" fill={COLORS.muted} fontWeight="600" textAnchor="end" letterSpacing="1.5">{label}</text>
    </g>
  );

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: `linear-gradient(180deg, #F8FAFF 0%, ${COLORS.bg} 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', system-ui, sans-serif", padding: "32px 16px" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 6 }}>
          <div style={{ width: 32, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #3B82F6, #8B5CF6)" }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: COLORS.muted, textTransform: "uppercase" }}>System Overview</span>
          <div style={{ width: 32, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #8B5CF6, #3B82F6)" }} />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: COLORS.textPrimary, letterSpacing: "-0.5px", margin: 0 }}>ATVD Pipeline Architecture</h1>
        <p style={{ fontSize: 13, color: COLORS.textSecondary, margin: "6px 0 0", letterSpacing: "0.3px" }}>Automated Traffic Violation Detection — End-to-End Processing Flow</p>
      </div>

      <svg viewBox="0 0 860 560" style={{ width: "min(92vw, 900px)", height: "auto" }}>
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={COLORS.mutedDark} fillOpacity="0.5" />
          </marker>
          <marker id="arrowhead-dashed" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={COLORS.calibration.border} fillOpacity="0.5" />
          </marker>
        </defs>

        {/* Phase labels */}
        <PhaseLabel x={68} y={50} label="INPUT" number="01" />
        <PhaseLabel x={68} y={140} label="DETECT" number="02" />
        <PhaseLabel x={68} y={255} label="TRACK" number="03" />
        <PhaseLabel x={68} y={400} label="MEASURE" number="04" />
        <PhaseLabel x={68} y={498} label="OUTPUT" number="05" />

        {/* Subtle vertical guide */}
        <line x1="230" y1="85" x2="230" y2="520" stroke={COLORS.line} strokeWidth="1" strokeDasharray="3,8" opacity="0.3" />

        {/* 1. Input */}
        <Node id="input" x={90} y={32} w={280} h={52} color={COLORS.input} title="CCTV Video Input" subtitle="Raw surveillance feed" badge="Stream" />

        {/* 2. Detection */}
        <Node id="detect" x={90} y={122} w={280} h={52} color={COLORS.detection} title="Vehicle Detection" subtitle="Bounding boxes + class labels" badge="YOLO" />

        {/* 3. Tracking */}
        <Node id="track" x={90} y={218} w={280} h={95} color={COLORS.tracking} title="Multi-Object Tracking" subtitle="Temporal ID assignment across frames">
          <rect x={108} y={272} width={248} height={30} rx="7" fill={COLORS.fuzzy.bg} stroke={COLORS.fuzzy.border} strokeWidth="1" strokeOpacity="0.4" />
          <text x={232} y={291} textAnchor="middle" fontSize="9.5" fontFamily="'Segoe UI', system-ui, sans-serif" fill={COLORS.fuzzy.text} fontWeight="600">Fuzzy Association & Class Stabilization</text>
        </Node>

        {/* 4. Speed Estimation */}
        <Node id="speed" x={90} y={382} w={280} h={52} color={COLORS.calibration} title="Speed Estimation" subtitle="Metric projection to real-world coords" />

        {/* 5. Calibration (side) — INCREASED height to 130, repositioned children */}
        <Node id="calib" x={440} y={158} w={240} h={130} color={COLORS.calibration} title="Geometric Calibration" subtitle="Scene-to-world mapping">
          <text x={458} y={218} fontSize="10.5" fontFamily="'Segoe UI', system-ui, sans-serif" fill={COLORS.textSecondary}>Homography matrix</text>
          <text x={458} y={236} fontSize="10.5" fontFamily="'Segoe UI', system-ui, sans-serif" fill={COLORS.textSecondary}>Region-of-Interest masks</text>
          <rect x={458} y={252} width={56} height={20} rx="10" fill={COLORS.calibration.bg} stroke={COLORS.calibration.border} strokeWidth="0.8" strokeOpacity="0.4" />
          <text x={486} y={266} textAnchor="middle" fontSize="8.5" fontFamily="'SF Mono', 'Fira Code', monospace" fill={COLORS.calibration.text} fontWeight="600">Manual</text>
        </Node>

        {/* 6. Violation Inference — INCREASED width to 260 */}
        <Node id="violation" x={440} y={362} w={260} h={92} color={COLORS.inference} title="Violation Inference" subtitle="Rule-based decision engine">
          <text x={458} y={426} fontSize="9" fontFamily="'SF Mono', 'Fira Code', monospace" fill={COLORS.inference.text} opacity="0.5">
            Lane · Stop · Direction · U-turn · Speed
          </text>
        </Node>

        {/* 7. Output */}
        <Node id="output" x={440} y={480} w={260} h={54} color={COLORS.output} title="Evidence Bundles" subtitle="Frames, tracks, timestamps, metadata" />

        {/* === ARROWS === */}

        {/* Main vertical flow */}
        <Arrow points="230,84 230,122" color={COLORS.input.border} />
        <Arrow points="230,174 230,218" color={COLORS.detection.border} />
        <Arrow points="230,313 230,382" color={COLORS.tracking.border} />

        {/* Calibration -> Tracking */}
        <CurvedArrow d="M 440,240 C 400,240 400,265 370,265" color={COLORS.calibration.border} dashed />
        {/* Calibration -> Speed */}
        <CurvedArrow d="M 440,275 C 395,310 395,402 370,404" color={COLORS.calibration.border} dashed />

        {/* Tracking -> Violation */}
        <CurvedArrow d="M 370,280 C 410,280 420,390 440,393" color={COLORS.tracking.border} />
        {/* Speed -> Violation */}
        <Arrow points="370,408 440,408" color={COLORS.calibration.border} />

        {/* Violation -> Output */}
        <Arrow points="570,454 570,480" color={COLORS.inference.border} />

        {/* Legend */}
        <g transform="translate(716, 32)">
          <rect x="0" y="0" width="128" height="92" rx="8" fill={COLORS.surface} stroke={COLORS.line} strokeWidth="1" />
          <text x="14" y="20" fontSize="8.5" fontFamily="'SF Mono', 'Fira Code', monospace" fill={COLORS.mutedDark} fontWeight="700" letterSpacing="1.5">LEGEND</text>
          <line x1="14" y1="30" x2="114" y2="30" stroke={COLORS.line} strokeWidth="0.8" />
          <line x1="14" y1="48" x2="38" y2="48" stroke={COLORS.mutedDark} strokeWidth="1.5" />
          <polygon points="36,45 42,48 36,51" fill={COLORS.mutedDark} fillOpacity="0.5" />
          <text x="48" y="52" fontSize="9.5" fill={COLORS.textSecondary} fontFamily="'Segoe UI', system-ui, sans-serif">Data flow</text>
          <line x1="14" y1="70" x2="38" y2="70" stroke={COLORS.calibration.border} strokeWidth="1.5" strokeDasharray="4,3" />
          <polygon points="36,67 42,70 36,73" fill={COLORS.calibration.border} fillOpacity="0.5" />
          <text x="48" y="74" fontSize="9.5" fill={COLORS.textSecondary} fontFamily="'Segoe UI', system-ui, sans-serif">Calibration</text>
        </g>
      </svg>
    </div>
  );
}