import { Component } from "@angular/core";

@Component({
    selector: 'rapid-toast',
    templateUrl: './rapid-toast.component.html'
})
export class RapidToastComponent {
    public handleToastClick(): void {
        console.log('ehhe')
    }
}