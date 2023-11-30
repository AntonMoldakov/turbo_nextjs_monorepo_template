import type { Meta, StoryObj } from '@storybook/react';
import queryString from 'query-string';
import type { FC } from 'react';

import { SelectPaginate } from './select-paginate';

interface MyData {
  id: string;
  title: string;
}

const loadOptions = async (search: string) => {
  const url = queryString.stringifyUrl(
    { url: 'https://jsonplaceholder.typicode.com/posts', query: { _limit: 10, title: search } },
    { skipEmptyString: true },
  );

  try {
    const response: Response = await fetch(url);
     
    const responseJSON: MyData[] = await response.json();

    const options = responseJSON.map(
      ({ id, title }: { id: string | number | null; title: string | number | null }) => ({
        label: title,
        value: id,
      }),
    );

    return {
      options,
      hasMore: false,
    };
  } catch (err) {
    return {
      options: [],
      hasMore: false,
    };
  }
};

const meta = {
  title: 'UI/SelectPaginate/default',
  component: SelectPaginate,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    defaultOptions: {
      table: {
        disable: true,
      },
    },
    additional: {
      table: {
        disable: true,
      },
    },
    defaultAdditional: {
      table: {
        disable: true,
      },
    },
    debounceTimeout: {
      table: {
        disable: true,
      },
    },
    loadOptionsOnMenuOpen: {
      table: {
        disable: true,
      },
    },
    reduceOptions: {
      table: {
        disable: true,
      },
    },
    shouldLoadMore: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    isSearchable: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectPaginate>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: FC<Story['args']> = (args) => {
  return <SelectPaginate {...args} loadOptions={loadOptions} placeholder="Placeholder" />;
};

export const Default: Story = {
  args: { loadOptions, required: false, disabled: false, isSearchable: true },
  render: (args) => <Template {...args} />,
};
