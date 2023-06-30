import type { Meta, StoryObj } from "@storybook/react"
import { Form } from "./Form"
import { ResetDecorator } from "./util/ResetDecorator"

const meta = {
  component: Form,
  decorators: [ResetDecorator]
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
