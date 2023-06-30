import type { Meta, StoryObj } from "@storybook/react"
import { Inline } from "./Inline"

const meta = {
  component: Inline
} satisfies Meta<typeof Inline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
