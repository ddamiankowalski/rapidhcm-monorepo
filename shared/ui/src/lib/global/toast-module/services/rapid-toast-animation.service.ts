import { ChangeDetectorRef, Injectable } from "@angular/core";
import { RapidAnimationType, RapidToastAnimation, RapidToastTiming } from "../../interfaces/toast.interface";

@Injectable()
export class RapidToastAnimationService {
    constructor(
        private cdRef: ChangeDetectorRef
    ) {}

    private MS_ANIMATION_DURATION = 150;
    private currentBoundingClientRect!: DOMRect;

    private _toastShowTransition: Array<RapidToastAnimation> = [ 
        { opacity: 0 },
        { opacity: 1 } 
    ]; 

    private _toastHideTransition: Array<RapidToastAnimation> = [ 
        { opacity: 1 },
        { opacity: 0 } 
    ]; 

    private _toastShowTiming: RapidToastTiming = {
        duration: this.MS_ANIMATION_DURATION, iterations: 1
    }

    public toggleAnimation(animationType: RapidAnimationType, nativeElement: HTMLElement): void {
        nativeElement.animate(
                RapidAnimationType.START === animationType ? 
                    this._toastShowTransition : this._toastHideTransition, this._toastShowTiming
            );
    }

    public getAnimationDuration(): number {
        return this.MS_ANIMATION_DURATION;
    }

    public setCurrentBoundingClientRect(clientRect: DOMRect): void {
        this.currentBoundingClientRect = clientRect;
    }

    public reorderToastAnimation(nativeElement: HTMLElement, newClientRect: DOMRect): void {
        nativeElement.animate([
            { transform: `translate(${this.currentBoundingClientRect.left - newClientRect.left}px, ${this.currentBoundingClientRect.top - newClientRect.top}px)` },
            { transform: `translate(0, 0)` }
        ], { duration: this.MS_ANIMATION_DURATION, easing: 'ease' });
    
        this.cdRef.detectChanges();
        this.setCurrentBoundingClientRect(newClientRect);
    }
}