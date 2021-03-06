import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
        name: 'noSpace'
})

export class NoSpacePipe implements PipeTransform {
    transform(value: string, rplcTo?: string): string {
        if (!rplcTo) { rplcTo = ''; }
        return value.replace(/\s+/g, rplcTo);
    }
}

