import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {

  // transform() is mandatory
  // value = input
  // limit = argument passed from template
  transform(value: string, limit: number, secondArg: string): string {
    if (!value) return '';

    // If string is already shorter than limit, return as it is
    if (value.length <= limit) {
      return value;
    }

    // Cut string and add ellipsis
    return value.substring(0, limit) + '...' + secondArg;
  }

}
