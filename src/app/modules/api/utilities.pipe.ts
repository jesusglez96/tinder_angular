import { Pipe } from '@angular/core';

@Pipe({
  name: 'utilities',
})
export class UtilitiesPipe {
  replaceSpaces(str: string): string {
    return str.replace(' ', '%20');
  }
}
