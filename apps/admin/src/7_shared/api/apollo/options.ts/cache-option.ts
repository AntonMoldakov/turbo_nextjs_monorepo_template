import type { InMemoryCacheConfig } from '@apollo/client';
// import { cursorPagination } from '@shared/api/apollo/fields-policies';

// const defaultCursorPagination = cursorPagination();

export const cacheOption: InMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {},
    },
  },
};
