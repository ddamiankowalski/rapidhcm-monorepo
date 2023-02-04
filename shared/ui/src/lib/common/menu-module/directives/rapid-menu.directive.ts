import { Directive, AfterViewInit, ViewContainerRef, HostListener } from '@angular/core';

@Directive({
    selector: '[rapidMenu]'
})
export class RapidMenuDirective implements AfterViewInit {
    private toggleElement?: ViewContainerRef;

    constructor(element: ViewContainerRef) {
        this.toggleElement = element;
    }

    @HostListener('click') onToggleClick(): void {
        console.log('clicked')
    }

    ngAfterViewInit(): void {
        console.log(this.toggleElement);
    }
}