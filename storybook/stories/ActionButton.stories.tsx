import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  ActionButton,
  ActionButtonVariant,
} from 'react-library-template-components';
import { StoryArgCategory } from './types';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const metadata: ComponentMeta<typeof ActionButton> = {
  title: 'Atoms/ActionButton',
  component: ActionButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      description: 'Button style variant',
      type: { name: 'string', required: false },
      control: 'radio',
      options: [
        'primary',
        'secondary',
        'default',
      ] satisfies ActionButtonVariant[],
      table: {
        type: {
          summary: 'string',
          detail:
            'One of the variant names defined by ActionButtonVariant type',
        },
        defaultValue: { summary: 'default' satisfies ActionButtonVariant },
        category: StoryArgCategory.Props,
      },
    },
    children: {
      name: '#default',
      description: 'Button caption',
      type: 'string',
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: StoryArgCategory.Children,
      },
    },
    onClick: {
      name: 'onClick',
      description: 'Click event listener',
      type: 'function',
      table: {
        type: { summary: 'function' },
        category: StoryArgCategory.Events,
      },
    },
  },
  args: {
    onClick: action('click'),
  },
};

export default metadata;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ActionButton> = (_args) => (
  <ActionButton {..._args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  children: 'Default Button',
};
