import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({ name: 'errormessage' })
export class RapidErrorMessagePipe implements PipeTransform {
    transform(validationObject: ValidationErrors | null): string {
        const [ validationRule ] = Object.keys(validationObject ?? {});
        return 'validation.' + validationRule;
    }
}