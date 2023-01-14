import { ChangeDetectionStrategy, Component, OnChanges } from "@angular/core";
import { RapidButtonComponent } from "../rapid-button/rapid-button.component";

@Component({
    selector: 'rapid-icon-button',
    templateUrl: './rapid-iconbutton.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidIconButtonComponent extends RapidButtonComponent implements OnChanges {
    constructor() {
        super();
    }
}