import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'rapid-header-searchbar',
    templateUrl: './rapid-header-searchbar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidHeaderSearchbarComponent {    
    public search: FormControl = new FormControl('');
}