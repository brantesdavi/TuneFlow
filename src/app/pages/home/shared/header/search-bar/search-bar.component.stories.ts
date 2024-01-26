import { Meta, StoryObj } from '@storybook/angular';

import { SearchBarComponent } from './search-bar.component';

type ComponentWithCustomControls = SearchBarComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Search Bar',
  component: SearchBarComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `SearchBar` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const SearchBar: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
