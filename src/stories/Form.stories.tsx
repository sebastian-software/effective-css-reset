import type { Meta, StoryObj } from "@storybook/react"
import { Form } from "./Form"

const meta = {
  component: Form
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
