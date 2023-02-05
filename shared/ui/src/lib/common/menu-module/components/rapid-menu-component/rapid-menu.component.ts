import { AfterViewInit, Component, ComponentRef, ElementRef, EventEmitter, Input, Output } from "@angular/core";
import { RapidMenuItem } from "../../../interfaces/menu.interface";

@Component({
    selector: 'rapid-menu',
    templateUrl: './rapid-menu.component.html'
})
export class RapidMenuComponent implements AfterViewInit {
    constructor(private element: ElementRef) {
        this.nativeElement = element.nativeElement;
    }

    private nativeElement: HTMLElement;

    @Output() menuClick: EventEmitter<RapidMenuItem> = new EventEmitter<RapidMenuItem>;

    @Input() menuItems?: RapidMenuItem[];
    @Input() toggleBoundingRect!: DOMRect;
    @Input() set destroyed(rapidMenuComponentRef: ComponentRef<RapidMenuComponent>) {
        const rapidMenuNativeElement: HTMLElement | undefined = this.nativeElement.querySelector('.rapid-menu') as HTMLElement;
        rapidMenuNativeElement?.animate(this.destroyAnimationSteps, this.AnimationTiming);
        setTimeout(() => {
            rapidMenuComponentRef.destroy();
        }, 150)
    } 

    handleMenuClick(item: RapidMenuItem): void {
        this.menuClick.emit(item);
    }

    ngAfterViewInit(): void {
        const arrowNativeElement: HTMLElement = this.nativeElement.querySelector('.rapid-menu__arrow') as HTMLElement;
        const rapidMenuNativeElement: HTMLElement = this.nativeElement.querySelector('.rapid-menu') as HTMLElement;
        rapidMenuNativeElement?.animate(this.initAnimationSteps, this.AnimationTiming);
        arrowNativeElement.style.transform = `translateX(calc(50% - ${this.widthValue / 2}px))`;
    }

    get xValue(): number {
        return this.toggleBoundingRect.x;
    }

    get yValue(): number {
        return this.toggleBoundingRect.y;
    }

    get widthValue(): number {
        return this.toggleBoundingRect.width;
    }

    get heightValue(): number {
        return this.toggleBoundingRect.height;
    }

    get initAnimationSteps() {
        return [
            { opacity: '0', transform: `translate(calc(-100% + ${this.widthValue}px), 1rem) scale(.9)` },
            { opacity: '1', transform: `translate(calc(-100% + ${this.widthValue}px), 1rem) scale(1)` }
        ];
    }

    get destroyAnimationSteps() {
        return [
            { opacity: '1' },
            { opacity: '0' }
        ];
    }

    get AnimationTiming() {
        return {
            duration: 200,
            iterations: 1,
        }
    }
}