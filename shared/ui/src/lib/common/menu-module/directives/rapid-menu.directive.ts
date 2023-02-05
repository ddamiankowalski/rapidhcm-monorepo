import { Directive, ViewContainerRef, HostListener, ComponentRef, Input } from '@angular/core';
import { RapidMenuItem } from '../../interfaces/menu.interface';
import { RapidMenuComponent } from '../components/rapid-menu-component/rapid-menu.component';
@Directive({
    selector: '[rapidMenu]'
})
export class RapidMenuDirective {
    @Input() menuItems?: RapidMenuItem[];

    private toggleElement!: ViewContainerRef;
    private menuElement?: ComponentRef<RapidMenuComponent>;
    private clickedInside?: boolean = false;
    private clientX?: number;
    private clientY?: number;

    constructor(public element: ViewContainerRef) {
        this.toggleElement = element;
    }

    private setXandY(nativeElement: HTMLElement): void {
        const boundingRect = nativeElement.getBoundingClientRect();
        this.clientX = boundingRect.left;
        this.clientY = boundingRect.bottom;
    }

    @HostListener('click') onToggleClick(): void {
        this.createMenuComponent();
        this.clickedInside = true;
    }

    @HostListener('document:click') onDocumentClick(): void {
        if (!this.clickedInside) {
            this.menuElement?.destroy();
            this.menuElement = undefined;
        }
        this.clickedInside = false;
    }

    public createMenuComponent(): void {
        if(!this.menuElement) {
            this.setXandY(this.toggleElement.element.nativeElement);
            this.menuElement = this.toggleElement?.createComponent(RapidMenuComponent);
            this.menuElement?.setInput('menuItems', this.menuItems);
            this.menuElement?.setInput('boundingRect', { x: this.clientX, y: this.clientY });
        }
    }
}