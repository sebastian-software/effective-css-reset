import type { StoryFn } from "@storybook/react"

import "../../index.css"

export function ResetDecorator(StoryToWrap: StoryFn) {
  return <StoryToWrap />
}
