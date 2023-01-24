import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { RapidAccessToken, RapidLoginPayload } from "../../../../interfaces/auth.interfaces";
import { RapidBackendService } from "../../../../services/backend.service";

@Component({
    selector: 'rapid-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
    constructor(private fb: FormBuilder, private backend: RapidBackendService) {}

    public loginForm!: FormGroup;

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: new FormControl('', [ Validators.required ]),
            password: new FormControl('', [ Validators.required ]),
            rememberUser: new FormControl(false)
        });
    }

    submitLogin(): void {
        this.backend.postRequest<RapidAccessToken, RapidLoginPayload>('auth/login', this.loginForm.value).subscribe((accessToken: RapidAccessToken) => console.log(accessToken));
    }
}