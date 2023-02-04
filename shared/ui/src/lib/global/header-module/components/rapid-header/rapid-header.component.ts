import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RapidQuickAction } from "../../../interfaces/header.interface";

@Component({
    selector: 'rapid-header',
    templateUrl: './rapid-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidHeaderComponent {
    public headerActions: RapidQuickAction[] = [
        { icon: 'circle-info' },
        { icon: 'layer-group' },
        { icon: 'circle-user' }
    ];    

    handleSearchInput(value: string): void {
        console.log(value);
    }
}