import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RapidButtonsModule, RapidCardsModule, RapidCheckboxModule, RapidIconsModule, RapidInputModule } from "@kowalskiddamian/rapid-ui";
import { AuthComponent } from "./components/auth-component/auth.component";
import { RapidThirdPartyAuthComponent } from "./components/third-party-auth-component/third-party-auth.component";
import { RapidLoginComponent } from "./components/login-component/login.component";
import { RouterModule } from "@angular/router";
import { authRoutes } from "./routes/auth.routes";
import { RapidRemindPasswordComponent } from "./components/remind-password-component/remind-password.component";
import { RapidSignUpComponent } from "./components/sign-up-component/sign-up.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RapidCardsModule,
        RapidInputModule,
        RapidCheckboxModule,
        RapidButtonsModule,
        RapidIconsModule,
        RouterModule.forChild(authRoutes)
    ],
    declarations: [
        AuthComponent,
        RapidThirdPartyAuthComponent,
        RapidLoginComponent,
        RapidRemindPasswordComponent,
        RapidSignUpComponent
    ],
    exports: [
        AuthComponent
    ]
})
export class AuthModule {}