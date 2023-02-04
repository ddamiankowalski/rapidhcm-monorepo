import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RapidBadgeModule, RapidIconsModule } from "../../common";
import { RapidSidenavAuxillaryComponent } from "./components/rapid-sidenav-auxillary/rapid-sidenav-auxillary.component";
import { RapidSidenavHeaderComponent } from "./components/rapid-sidenav-header/rapid-sidenav-header.component";
import { RapidSidenavMenuComponent } from "./components/rapid-sidenav-menu/rapid-sidenav-menu.component";
import { RapidSidenavComponent } from "./components/rapid-sidenav/rapid-sidenav.component";

@NgModule({
    declarations: [
        RapidSidenavComponent,
        RapidSidenavHeaderComponent,
        RapidSidenavMenuComponent,
        RapidSidenavAuxillaryComponent
    ],
    exports: [
        RapidSidenavComponent
    ],
    imports: [
        CommonModule,
        RapidIconsModule,
        RapidBadgeModule
    ]
})
export class RapidSidenavModule {}