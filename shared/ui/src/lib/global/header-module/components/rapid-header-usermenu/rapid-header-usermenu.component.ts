import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RapidMenuItem } from '@kowalskiddamian/rapid-ui';

@Component({
    selector: 'rapid-header-usermenu',
    templateUrl: './rapid-header-usermenu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidHeaderUsermenuComponent {
    public menuItems: RapidMenuItem[] = [
        { label: 'Settings', icon: 'gear' },
        { label: 'Log out', icon: 'door-open' }
    ];

    public handleMenuClick(menuItem: RapidMenuItem): void {
        console.log(menuItem);
    }
}