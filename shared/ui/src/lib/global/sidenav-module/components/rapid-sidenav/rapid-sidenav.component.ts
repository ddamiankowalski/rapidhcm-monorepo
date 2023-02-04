import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RapidSidenavMenuItem } from "../../../interfaces/sidenav.interface";

@Component({
    selector: 'rapid-sidenav',
    templateUrl: './rapid-sidenav.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidSidenavComponent {
    public isCollapsed = false;

    toggleSideNav(): void {
        this.isCollapsed = !this.isCollapsed;
    }

    changeActiveItem(activeItem: RapidSidenavMenuItem) {
        this.isCollapsed = false;
        console.log(activeItem);
    }
}