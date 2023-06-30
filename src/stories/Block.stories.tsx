import type { Meta, StoryObj } from "@storybook/react"
import { Block } from "./Block"
import { ResetDecorator } from "./util/ResetDecorator"

const meta = {
  component: Block,
  decorators: [ResetDecorator]
} satisfies Meta<typeof Block>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
