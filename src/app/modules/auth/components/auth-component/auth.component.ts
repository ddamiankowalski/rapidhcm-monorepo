import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { RapidLoadingService } from "../../../../services/loading.service";
import { RapidAccessToken, RapidLoginPayload } from "../../../../interfaces/auth.interfaces";
import { RapidBackendService } from "../../../../services/backend.service";
import { ChildrenOutletContexts } from "@angular/router";
import { smoothHeight } from "../../animations/router.animations";
@Component({
    selector: 'rapid-auth',
    templateUrl: './auth.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RapidLoadingService],
    animations: [smoothHeight]
})
export class AuthComponent implements OnInit {
    constructor(
        private fb: FormBuilder, 
        private backend: RapidBackendService, 
        public loading: RapidLoadingService,
        private contexts: ChildrenOutletContexts
    ) {}

    public loginForm!: FormGroup;

    public ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: new FormControl('', [ Validators.required ]),
            password: new FormControl('', [ Validators.required ]),
            rememberUser: new FormControl(false)
        });
    }

    public getRouteAnimationData(): 'LoginView' | 'RemindView' | 'SignUpView' {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }

    public submitLogin(): void {
        this.backend.postRequest<RapidAccessToken, RapidLoginPayload>('auth/login', this.loginForm.value, this.loading.status$)
            .subscribe((accessToken: RapidAccessToken) => this.handleLoginResponse(accessToken));
    }

    private handleLoginResponse(accessToken: RapidAccessToken): void {
        console.log(accessToken);
    }
}