import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RapidButtonsModule, RapidIconsModule } from "../../common";
import { RapidHeaderSearchbarComponent } from "./components/rapid-header-searchbar/rapid-header-searchbar.component";
import { RapidHeaderUsermenuComponent } from "./components/rapid-header-usermenu/rapid-header-usermenu.component";
import { RapidHeaderComponent } from "./components/rapid-header/rapid-header.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RapidButtonsModule,
        RapidIconsModule
    ],
    exports: [
        RapidHeaderComponent
    ],
    declarations: [
        RapidHeaderComponent,
        RapidHeaderSearchbarComponent,
        RapidHeaderUsermenuComponent
    ]
})
export class RapidHeaderModule {}