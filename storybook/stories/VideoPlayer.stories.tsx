import React from 'react';
import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VideoPlayer } from 'react-library-template-components';
import { StoryArgCategory } from './types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const metadata: ComponentMeta<typeof VideoPlayer> = {
  title: 'Molecules/VideoPlayer',
  component: VideoPlayer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    options: {
      description: 'Video.js player options.',
      type: {
        name: 'object',
        required: true,
        value: {
          autoplay: { name: 'boolean', required: false },
          controls: { name: 'boolean', required: false },
          muted: { name: 'boolean', required: false },
          sources: {
            name: 'array',
            required: true,
            value: {
              name: 'object',
              value: {
                src: { name: 'string', required: true },
                type: { name: 'string', required: false },
              },
            },
          },
          width: { name: 'number', required: false },
          height: { name: 'number', required: false },
        },
      },
      control: 'object',
      table: {
        type: {
          summary: 'object',
          detail:
            'Options passed to Video.js setup routine. See https://videojs.com/guides/options/',
        },
        category: StoryArgCategory.Props,
      },
    },
    onReady: {
      name: 'onReady',
      description: 'Ready event listener invoked when video is ready to play',
      type: 'function',
      table: {
        type: { summary: 'function' },
        category: StoryArgCategory.Events,
      },
    },
  },
  args: {
    onReady: action('ready'),
  },
};

export default metadata;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VideoPlayer> = (_args) => (
  <VideoPlayer {..._args} />
);

export const Default = Template.bind({});
Default.args = {
  options: {
    autoplay: true,
    controls: true,
    muted: true,
    sources: [{ src: '/bunny.mp4', type: 'video/mp4' }],
    width: 640,
    height: 360,
  },
};
