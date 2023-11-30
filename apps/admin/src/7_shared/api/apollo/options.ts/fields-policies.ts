/* eslint-disable @typescript-eslint/no-unsafe-return -- any data from api  */
 

import type { FieldPolicy } from '@apollo/client/cache/inmemory/policies';
import unionBy from 'lodash.unionby';
 
type KeyArgs = FieldPolicy<string>['keyArgs'];

export const cursorPagination = (keyArgs: KeyArgs = ['nextCursor'], unionByField = '__ref'): FieldPolicy => ({
  keyArgs,
  merge(existing, incoming, { args }) {
    const incomingResult = incoming ? incoming.results : [];
    const existingResult = existing ? existing.results : [];
    const hasNextCursor = Boolean(args?.pagination?.nextCursor);
    if (hasNextCursor) {
      const resultPagination = unionBy(existingResult, incomingResult, unionByField);

      return {
        ...incoming,
        results: resultPagination,
      };
    } 
    return incoming;
  },
});
  