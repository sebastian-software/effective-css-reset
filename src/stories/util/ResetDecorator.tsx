import type { StoryFn } from "@storybook/react"
import { useEffect } from "react"
import { loadStyles } from "../.."

export function ResetDecorator(StoryToWrap: StoryFn) {
  useEffect(() => {
    void loadStyles()
  }, [])

  return <StoryToWrap />
}
