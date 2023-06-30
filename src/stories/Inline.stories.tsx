import type { Meta, StoryObj } from "@storybook/react"
import { Inline } from "./Inline"
import { ResetDecorator } from "./util/ResetDecorator"

const meta = {
  component: Inline,
  decorators: [ResetDecorator]
} satisfies Meta<typeof Inline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
