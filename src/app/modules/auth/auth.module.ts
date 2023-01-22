import { NgModule } from "@angular/core";
import { AuthComponent } from "./components/auth-component/auth.component";

@NgModule({
    declarations: [
        AuthComponent
    ],
    exports: [
        AuthComponent
    ],
    providers: []
})
export class AuthModule {}