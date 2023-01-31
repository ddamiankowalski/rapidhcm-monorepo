import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RapidOptions } from 'shared/ui/src/lib/common/interfaces/select.interface';
import { RapidStepperItems } from 'shared/ui/src/lib/common/interfaces/stepper.interface';
import { RapidSignUpPayload, RapidSignUpResponse } from '../../../../interfaces/auth.interfaces';
import { RapidBackendService } from '../../../../services/backend.service';
import { RapidLoadingService } from '../../../../services/loading.service';

@Component({
    selector: 'rapid-sign-up',
    templateUrl: './sign-up.component.html',
    providers: [RapidLoadingService]
})
export class RapidSignUpComponent implements OnInit {
    constructor(
        private fb: FormBuilder,
        private backend: RapidBackendService,
        private loading: RapidLoadingService,
        private router: Router
    ) {}

    public steps: RapidStepperItems = [
        { title: 'register.primary-data' },
        { title: 'register.optional-data' }
    ];

    public languageOptions: RapidOptions = [
        { value: 'pl_PL', label: 'Polish', icon: 'pl' },
        { value: 'en_US', label: 'English (US)', icon: 'us' }
    ];

    public currentStep = 0;
    public signupForm!: FormGroup;

    ngOnInit(): void {
        this.signupForm = this.fb.group({
            primary: new FormGroup({
                email: new FormControl('', [ Validators.email, Validators.required ]),
                username: new FormControl('', [ Validators.required ])
            }),
            secondary: new FormGroup({
                language: new FormControl(''),
                password: new FormControl('', [ Validators.required ]),
                repeatpassword: new FormControl('', [ Validators.required ]),
                terms: new FormControl<boolean>(false, [ Validators.requiredTrue ])
            })
        })
    }

    get primarySignupForm(): FormGroup {
        return this.signupForm.controls['primary'] as FormGroup;
    }

    get secondarySignupForm(): FormGroup {
        return this.signupForm.controls['secondary'] as FormGroup;
    }

    public proceedToNextAction(): void {
        this.currentStep === 0 ? this.goToNextStep() : this.submitSignUp();
    }

    public submitSignUp(): void {
        const payload = this.constructSignUpPayload();
        this.backend.postRequest<RapidSignUpResponse, RapidSignUpPayload>('auth/register', payload, this.loading.status$)
            .subscribe((signUpResponse: RapidSignUpResponse) => this.handleSignUpResponse(signUpResponse));
    }

    private constructSignUpPayload(): RapidSignUpPayload {
        return { ...this.primarySignupForm.value, language: this.secondarySignupForm.controls['language'].value, password: this.secondarySignupForm.controls['password'].value,  }
    }

    private handleSignUpResponse(signUpResponse: RapidSignUpResponse): void {
        console.log(signUpResponse);
        this.router.navigate(['/auth/confirmsignup'])
    }

    private goToNextStep(): void {
        if(this.currentStep === 0) {
            this.currentStep++;
        }
    }
}