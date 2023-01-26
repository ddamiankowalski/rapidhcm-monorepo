import { Injectable } from "@angular/core";
import { RapidAnimationType, RapidToastAnimation, RapidToastTiming } from "../../interfaces/toast.interface";

@Injectable()
export class RapidToastAnimationService {
    private MS_ANIMATION_DURATION = 300;
    private currentBoundingClientRect!: DOMRect;

    private _toastShowTransition: Array<RapidToastAnimation> = [ 
        { opacity: 0, transform: 'translateY(.725rem)' },
        { opacity: 1, transform: 'translateY(0)' } 
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
            { transform: `translateX(${this.currentBoundingClientRect.left - newClientRect.left}px)` },
            { transform: 'translateX(0)' }
        ], { duration: this.MS_ANIMATION_DURATION, easing: 'ease-in-out' });
    
        this.currentBoundingClientRect = newClientRect;
    }
}