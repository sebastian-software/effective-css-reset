import type { StoryFn } from "@storybook/react"
import "../.."

export function ResetDecorator(StoryToWrap: StoryFn) {
  return <StoryToWrap />
}
