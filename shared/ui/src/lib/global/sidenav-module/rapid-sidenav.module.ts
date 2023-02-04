import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RapidIconsModule } from "../../common";
import { RapidSidenavHeaderComponent } from "./components/rapid-sidenav-header/rapid-sidenav-header.component";
import { RapidSidenavMenuComponent } from "./components/rapid-sidenav-menu/rapid-sidenav-menu.component";
import { RapidSidenavComponent } from "./components/rapid-sidenav/rapid-sidenav.component";

@NgModule({
    declarations: [
        RapidSidenavComponent,
        RapidSidenavHeaderComponent,
        RapidSidenavMenuComponent
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