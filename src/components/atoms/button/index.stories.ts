import { Meta, StoryObj } from '@storybook/react';
import BaseButton from './';

const meta = {
  title: 'Components/Atoms/Button/Base Button',
  component: BaseButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BaseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Click Me',
    variant: 'primary',
    block: true,
    isLoading: false,
  },
};
