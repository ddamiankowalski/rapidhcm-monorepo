import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { RapidIconsModule } from "../../common";
import { RapidToastOutletComponent } from "./components/rapid-toast-outlet/rapid-toast-outlet.component";
import { RapidToastComponent } from "./components/rapid-toast/rapid-toast.component";
import { RapidToastService } from "./services/rapid-toast.service";

@NgModule({
    imports: [
        CommonModule,
        RapidIconsModule
    ],
    declarations: [
        RapidToastOutletComponent,
        RapidToastComponent
    ],
    exports: [
        RapidToastOutletComponent
    ],
    providers: [
        RapidToastService
    ]
})
export class RapidToastModule {
    public static forRoot(config: any): ModuleWithProviders<RapidToastModule> {
        // TODO fix config in here for the future
        return {
            ngModule: RapidToastModule,
            providers: []
        }
    }
}