import { Directive, ViewContainerRef, HostListener, ComponentRef, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { RapidMenuItem } from '../../interfaces/menu.interface';
import { RapidMenuComponent } from '../components/rapid-menu-component/rapid-menu.component';
@Directive({
    selector: '[rapidMenu]'
})
export class RapidMenuDirective {
    @Input() menuItems?: RapidMenuItem[];
    @Output() menuItemClicked: EventEmitter<RapidMenuItem> = new EventEmitter();

    private toggleElement!: ViewContainerRef;
    private menuElement?: ComponentRef<RapidMenuComponent>;
    private clickedInside?: boolean = false;
    private clickSubscription: Subscription = new Subscription();

    constructor(public element: ViewContainerRef) {
        this.toggleElement = element;
    }

    private getBoundingRect(nativeElement: HTMLElement): DOMRect {
        return nativeElement.getBoundingClientRect();
    }

    @HostListener('click') onToggleClick(): void {
        this.createMenuComponent();
        this.clickedInside = true;
    }

    @HostListener('document:click') onDocumentClick(): void {
        if (!this.clickedInside) {
            this.menuElement?.setInput('destroyed', this.menuElement);
            this.menuElement = undefined;
            this.clickSubscription.unsubscribe();
        }
        this.clickedInside = false;
    }

    public createMenuComponent(): void {
        if(!this.menuElement) {
            this.menuElement = this.toggleElement?.createComponent(RapidMenuComponent);
            this.menuElement?.setInput('menuItems', this.menuItems);
            this.menuElement?.setInput('toggleBoundingRect', this.getBoundingRect(this.toggleElement.element.nativeElement));
            this.listenForClick();
        }
    }

    private listenForClick(): void {
        this.menuElement?.instance.menuClick.subscribe((menuItem: RapidMenuItem) => {
            this.menuItemClicked.emit(menuItem);
        })
    }
}