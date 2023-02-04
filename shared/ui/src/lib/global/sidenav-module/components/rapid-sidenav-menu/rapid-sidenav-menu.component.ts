import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RapidSidenavMenuItem } from '../../../interfaces/sidenav.interface';

@Component({
    selector: 'rapid-sidenav-menu',
    templateUrl: './rapid-sidenav-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidSidenavMenuComponent {
    @Input() set isNavCollapsed(collapsedValue: boolean) {
        if(collapsedValue) {
            this.activeItem$.next(true);
        }
    }

    @Output() activeItem: EventEmitter<RapidSidenavMenuItem> = new EventEmitter();

    public activeItem$: BehaviorSubject<string | true> = new BehaviorSubject<string | true>(true);

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

    public handleMenuItemClick(item: RapidSidenavMenuItem): void {
        this.activeItem.next(item);
        this.activeItem$.next(item.label);
    }
}