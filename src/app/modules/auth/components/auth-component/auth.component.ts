import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { RapidLoadingService } from "../../../../services/loading.service";
import { RapidAccessToken, RapidLoginPayload } from "../../../../interfaces/auth.interfaces";
import { RapidBackendService } from "../../../../services/backend.service";
import { RapidToastService } from "shared/ui/src/lib/global/toast-module/services/rapid-toast.service";

@Component({
    selector: 'rapid-auth',
    templateUrl: './auth.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RapidLoadingService]
})
export class AuthComponent implements OnInit {
    constructor(
        private fb: FormBuilder, 
        private backend: RapidBackendService, 
        public loading: RapidLoadingService,
        private toast: RapidToastService
    ) {}

    public loginForm!: FormGroup;

    public ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: new FormControl('', [ Validators.required ]),
            password: new FormControl('', [ Validators.required ]),
            rememberUser: new FormControl(false)
        });

        this.toast.addToast('hmm', 'nie wiem');
    }

    public submitLogin(): void {
        this.backend.postRequest<RapidAccessToken, RapidLoginPayload>('auth/login', this.loginForm.value, this.loading.status$)
            .subscribe((accessToken: RapidAccessToken) => this.handleLoginResponse(accessToken));
    }

    private handleLoginResponse(accessToken: RapidAccessToken): void {
        console.log(accessToken);
    }
}