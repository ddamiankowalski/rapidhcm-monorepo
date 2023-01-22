import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RapidButtonsModule, RapidCardsModule, RapidCheckboxModule, RapidIconsModule, RapidInputModule } from "@kowalskiddamian/rapid-ui";
import { AuthComponent } from "./components/auth-component/auth.component";
import { ThirdPartyAuthComponent } from "./components/third-party-auth-component/third-party-auth.component";

@NgModule({
    imports: [
        CommonModule,
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
    ],
    providers: []
})
export class AuthModule {}