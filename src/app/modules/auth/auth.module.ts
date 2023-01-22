import { NgModule } from "@angular/core";
import { RapidButtonsModule, RapidCardsModule, RapidCheckboxModule, RapidInputModule } from "@kowalskiddamian/rapid-ui";
import { AuthComponent } from "./components/auth-component/auth.component";
import { ThirdPartyAuthComponent } from "./components/third-party-auth-component/third-party-auth.component";

@NgModule({
    imports: [
        RapidCardsModule,
        RapidInputModule,
        RapidCheckboxModule,
        RapidButtonsModule
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