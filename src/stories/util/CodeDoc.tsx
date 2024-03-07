import { PropsWithChildren } from "react"

const inlineStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.5rem",
  paddingBlock: "0.25rem"
}

const codeStyle = {
  display: "inline-block",
  fontSize: "0.75rem",
  color: "rgba(0,0,0,0.7)",
  background: "lightblue",
  padding: "0.125rem 0.25rem",
  borderRadius: "4px"
}

export function InlineWrapper({ children }: PropsWithChildren) {
  return <div style={inlineStyle}>{children}</div>
}

export function CodeDoc({ children }: PropsWithChildren) {
  return <div style={codeStyle}>{children}</div>
}
