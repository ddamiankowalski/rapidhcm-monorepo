import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RapidIconsModule } from "../../common";
import { RapidSidenavHeaderComponent } from "./components/rapid-sidenav-header/rapid-sidenav-header.component";
import { RapidSidenavComponent } from "./components/rapid-sidenav/rapid-sidenav.component";

@NgModule({
    declarations: [
        RapidSidenavComponent,
        RapidSidenavHeaderComponent
    ],
    exports: [
        RapidSidenavComponent
    ],
    imports: [
        CommonModule,
        RapidIconsModule
    ]
})
export class RapidSidenavModule {}