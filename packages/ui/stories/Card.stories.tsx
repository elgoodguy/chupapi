import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="mr-2">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px] p-6">
      <p>This is a simple card with just some content and no header or footer.</p>
    </Card>
  ),
};

export const WithAccent: Story = {
  render: () => (
    <Card className="w-[350px] border-accent">
      <CardHeader className="bg-accent text-accent-foreground">
        <CardTitle>Accent Card</CardTitle>
        <CardDescription className="text-accent-foreground/80">With accent styling</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <p>This card uses the accent color for its header.</p>
      </CardContent>
      <CardFooter>
        <Button variant="accent">Accent Button</Button>
      </CardFooter>
    </Card>
  ),
};
