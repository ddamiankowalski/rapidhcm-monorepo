import { Component, HostBinding } from "@angular/core";

@Component({
    selector: 'rapid-tile',
    templateUrl: './rapid-tile.component.html'
})
export class RapidTileComponent {
    @HostBinding('style.grid-column') public columnSpan = 'span 7';
    @HostBinding('style.grid-row') public rowSpan = 'span 3';
}