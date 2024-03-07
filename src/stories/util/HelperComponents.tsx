import { CSSProperties, PropsWithChildren } from "react"

const blockStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
}

const inlineStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.5rem"
}

const codeStyle: CSSProperties = {
  display: "inline-block",
  fontSize: "0.75rem",
  color: "rgba(0,0,0,0.7)",
  background: "lightblue",
  padding: "0.125rem 0.25rem",
  borderRadius: "4px"
}

export function BlockWrapper({ children }: PropsWithChildren) {
  return <div style={blockStyle}>{children}</div>
}

export function InlineWrapper({ children }: PropsWithChildren) {
  return <div style={inlineStyle}>{children}</div>
}

export function CodeDoc({ children }: PropsWithChildren) {
  return <div style={codeStyle}>{children}</div>
}
