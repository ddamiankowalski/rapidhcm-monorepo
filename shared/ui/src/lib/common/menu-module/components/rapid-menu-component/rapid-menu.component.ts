import { Component, Input } from "@angular/core";
import { RapidMenuBoundingRect, RapidMenuItem } from "../../../interfaces/menu.interface";

@Component({
    selector: 'rapid-menu',
    templateUrl: './rapid-menu.component.html'
})
export class RapidMenuComponent {
    @Input() menuItems?: RapidMenuItem[];
    @Input() boundingRect!: RapidMenuBoundingRect;

    get xValue(): number {
        console.log(this.boundingRect)
        return this.boundingRect.x;
    }

    get yValue(): number {
        return this.boundingRect.y;
    }
}