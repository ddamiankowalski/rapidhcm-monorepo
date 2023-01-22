import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: 'rapid-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
    constructor(private fb: FormBuilder) {}

    public loginForm!: FormGroup;

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            login: new FormControl({ value: '', disabled: true }),
            password: new FormControl(),
            rememberUser: new FormControl()
        });

        console.log(this.loginForm)
    }
}