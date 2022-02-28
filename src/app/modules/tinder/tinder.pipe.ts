import { Pipe, PipeTransform } from '@angular/core';
import { Match } from './match.interface';

@Pipe({
  name: 'tinderPipe',
})
export class TinderPipe implements PipeTransform {
  transform(res: any[]): Match[] {
    let matches: Match[] = [];
    res.forEach((element) => {
      matches.push({
        name: element.name,
        email: element.email,
        ratio: element.ratio,
      });
    });
    return matches;
  }
}
