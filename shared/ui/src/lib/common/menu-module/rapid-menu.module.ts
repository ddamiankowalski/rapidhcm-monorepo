import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RapidMenuComponent } from "./components/rapid-menu-component/rapid-menu.component";
import { RapidMenuDirective } from "./directives/rapid-menu.directive";

@NgModule({
    declarations: [
        RapidMenuDirective,
        RapidMenuComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RapidMenuDirective
    ]
})
export class RapidMenuModule {}