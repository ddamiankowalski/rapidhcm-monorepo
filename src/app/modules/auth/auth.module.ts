import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RapidButtonsModule, RapidCardsModule, RapidCheckboxModule, RapidIconsModule, RapidInputModule } from "@kowalskiddamian/rapid-ui";
import { AuthComponent } from "./components/auth-component/auth.component";
import { ThirdPartyAuthComponent } from "./components/third-party-auth-component/third-party-auth.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RapidCardsModule,
        RapidInputModule,
        RapidCheckboxModule,
        RapidButtonsModule,
        RapidIconsModule
    ],
    declarations: [
        AuthComponent,
        ThirdPartyAuthComponent
    ],
    exports: [
        AuthComponent
    ]
})
export class AuthModule {}