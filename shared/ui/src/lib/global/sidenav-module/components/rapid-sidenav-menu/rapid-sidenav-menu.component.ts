import { Component } from '@angular/core';
import { RapidSidenavMenuItem } from '../../../interfaces/sidenav.interface';

@Component({
    selector: 'rapid-sidenav-menu',
    templateUrl: './rapid-sidenav-menu.component.html'
})
export class RapidSidenavMenuComponent {
    public menuItems?: RapidSidenavMenuItem[] = [
        { 
            label: 'News', 
            icon: 'message' 
        },
        { 
            label: 'Calendar', 
            icon: 'calendar', 
            subitem: [
                { label: 'My Calendars' },
                { label: 'Shared Calendars' }
            ]
        },
        { 
            label: 'Settings', 
            icon: 'gear' 
        },
        { 
            label: 'Contacts', 
            icon: 'users' 
        },
    ];
}