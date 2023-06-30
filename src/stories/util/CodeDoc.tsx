import { PropsWithChildren } from "react"

const codeStyle = {
  display: "inline-block",
  fontSize: "0.75rem",
  color: "rgba(0,0,0,0.7)",
  background: "lightblue",
  padding: "0.125rem 0.25rem",
  borderRadius: "4px",
  marginTop: "1rem",
  marginLeft: "0.5rem"
}

export function CodeDoc({children}: PropsWithChildren) {
  return <div style={codeStyle}>{children}</div>
}
