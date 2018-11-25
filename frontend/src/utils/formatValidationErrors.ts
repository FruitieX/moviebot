import * as t from 'io-ts';
import { formatValidationError } from 'io-ts-reporters';
import * as array from 'fp-ts/lib/Array';

export const formatValidationErrors = (errors: t.Errors) => 
  array.catOptions(errors.map(formatValidationError)).join('\n'); 