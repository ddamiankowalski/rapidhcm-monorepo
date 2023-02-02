import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RapidSidenavComponent } from "./components/rapid-sidenav/rapid-sidenav.component";

@NgModule({
    declarations: [
        RapidSidenavComponent
    ],
    exports: [
        RapidSidenavComponent
    ],
    imports: [
        CommonModule
    ]
})
export class RapidSidenavModule {}