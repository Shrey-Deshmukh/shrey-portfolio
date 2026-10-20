export default function Node({ node, left, top, down, onHover }) {
  return (
    <a
      href={`#${node.id}`}
      className={`node${down ? " node-down" : ""}`}
      style={{ left, top }}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(node.id)}
      onBlur={() => onHover(null)}
      aria-label={`Go to ${node.label}: ${node.preview}`}
    >
      <span className={`dot ${down ? "dot-err" : "dot-ok"}`} aria-hidden="true" />
      <span className="node-label">{node.label}</span>
      <span className="node-preview">{down ? "NotReady · link down" : node.preview}</span>
    </a>
  )
}
