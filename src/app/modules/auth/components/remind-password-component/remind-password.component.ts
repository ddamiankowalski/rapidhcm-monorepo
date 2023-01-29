import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'rapid-remind-password',
    templateUrl: './remind-password.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidRemindPasswordComponent implements OnInit {
    constructor(
        private fb: FormBuilder
    ) {}

    public remindForm!: FormGroup;
    
    ngOnInit(): void {
        this.remindForm = this.fb.group({
            email: new FormControl('', [ Validators.email, Validators.required ])
        });
    }

    public submitForgotPassword(): void {
        console.log(this.remindForm.value);
    }
}