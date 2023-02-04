import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: 'rapid-header',
    templateUrl: './rapid-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidHeaderComponent {
    handleSearchInput(value: string): void {
        console.log(value);
    }
}