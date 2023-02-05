import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RapidMenuComponent } from "./components/rapid-menu-component/rapid-menu.component";
import { RapidMenuDirective } from "./directives/rapid-menu.directive";
import { RapidIconsModule } from "../icon-module/rapid-icons.module";

@NgModule({
    declarations: [
        RapidMenuDirective,
        RapidMenuComponent
    ],
    imports: [
        CommonModule,
        RapidIconsModule
    ],
    exports: [
        RapidMenuDirective
    ]
})
export class RapidMenuModule {}