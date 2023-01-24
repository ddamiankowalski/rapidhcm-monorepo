import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'rapid-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
    constructor(private fb: FormBuilder) {}

    public loginForm!: FormGroup;

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            login: new FormControl('', [ Validators.required ]),
            password: new FormControl('', [ Validators.required ]),
            rememberUser: new FormControl(false)
        });
    }
}