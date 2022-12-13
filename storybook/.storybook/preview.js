import 'react-library-template-components/dist/assets/style.css';

export const parameters = {
  controls: {
    // More on full docs for controls: https://storybook.js.org/docs/react/essentials/controls#show-full-documentation-for-each-property
    expanded: true,
    // More on sorting controls: https://storybook.js.org/docs/react/essentials/controls#sorting-controls
    sort: 'alpha',
  },
  // More on story layout: https://storybook.js.org/docs/react/configure/story-layout
  layout: 'centered',
  options: {
    // More on sorting stories: https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
    storySort: {
      method: 'alphabetical',
      order: ['Overview', 'Atoms', 'Molecules'],
    },
  },
  // More on a11y tests configuration: https://storybook.js.org/docs/react/writing-tests/accessibility-testing#configure
  a11y: {},
};
