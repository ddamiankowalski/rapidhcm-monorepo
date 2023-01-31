import { Component } from '@angular/core';

@Component({
    selector: 'rapid-confirm-signup',
    templateUrl: './confirm-signup.component.html'
})
export class RapidConfirmSignUpComponent {
    public sendEmail(): void {
        console.log('sending agian');
    }
}