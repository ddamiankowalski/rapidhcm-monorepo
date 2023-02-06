import { Component, HostBinding, Input } from "@angular/core";

@Component({
    selector: 'rapid-tile',
    templateUrl: './rapid-tile.component.html'
})
export class RapidTileComponent {
    @Input() set column(value: number) {
        this.columnSpan = `span ${value}`;
    }

    @Input() set row(value: number) {
        this.rowSpan = `span ${value}`;
    }

    @HostBinding('style.grid-column') public columnSpan?: string;
    @HostBinding('style.grid-row') public rowSpan?: string;
}