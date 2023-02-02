import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { RapidLoadingService } from "../../../../services/loading.service";
import { RapidAccessToken, RapidLoginPayload } from "../../../../interfaces/auth.interfaces";
import { RapidBackendService } from "../../../../services/backend.service";
import { Router } from "@angular/router";

@Component({
    selector: 'rapid-login',
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RapidLoadingService]
})
export class RapidLoginComponent implements OnInit {
    constructor(
        private fb: FormBuilder, 
        private backend: RapidBackendService, 
        public loading: RapidLoadingService,
        private router: Router
    ) {}

    public loginForm!: FormGroup;

    public ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: new FormControl('', [ Validators.required ]),
            password: new FormControl('', [ Validators.required ]),
            rememberUser: new FormControl(false)
        });
    }

    public submitLogin(): void {
        this.backend.postRequest<RapidAccessToken, RapidLoginPayload>('auth/login', this.loginForm.value, this.loading.status$)
            .subscribe((accessToken: RapidAccessToken) => this.handleLoginResponse(accessToken));
    }

    private handleLoginResponse(token: RapidAccessToken): void {
        const { accessToken } = token;
        localStorage.setItem('rapidAccessToken', accessToken);
        this.router.navigate(['/dashboard']);
        console.log('navigating');
    }
}