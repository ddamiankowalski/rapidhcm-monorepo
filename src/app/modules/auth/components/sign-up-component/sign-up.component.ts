import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RapidStepperItems } from 'shared/ui/src/lib/common/interfaces/stepper.interface';

@Component({
    selector: 'rapid-sign-up',
    templateUrl: './sign-up.component.html'
})
export class RapidSignUpComponent implements OnInit {
    constructor(
        private fb: FormBuilder
    ) {}

    public steps: RapidStepperItems = [
        { title: 'register.primary-data' },
        { title: 'register.optional-data' }
    ];

    public currentStep = 0;
    public signupForm!: FormGroup;

    ngOnInit(): void {
        this.signupForm = this.fb.group({
            primary: new FormGroup({
                email: new FormControl('', [ Validators.email, Validators.required ]),
                username: new FormControl('', [ Validators.required ])
            })
        })
    }

    get primarySignupForm(): FormGroup {
        return this.signupForm.controls['primary'] as FormGroup;
    }

    public proceedToNextAction(): void {
        this.currentStep === 0 ? this.goToNextStep() : this.signUp();
    }

    private goToNextStep(): void {
        if(this.currentStep === 0) {
            this.currentStep++;
        }
    }

    private signUp(): void {
        console.log(this.signupForm);
    }
}