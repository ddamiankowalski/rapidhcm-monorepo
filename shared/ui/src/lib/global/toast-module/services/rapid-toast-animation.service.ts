import { Injectable } from "@angular/core";
import { RapidAnimationType, RapidToastAnimation, RapidToastTiming } from "../../interfaces/toast.interface";

@Injectable()
export class RapidToastAnimationService {
    private _toastShowTransition: Array<RapidToastAnimation> = [ 
        { opacity: 0, transform: 'translateY(.725rem)' },
        { opacity: 1, transform: 'translateY(0)' } 
    ]; 

    private _toastShowTiming: RapidToastTiming = {
        duration: 300, iterations: 1
    }

    public toggleAnimation(animationType: RapidAnimationType, nativeElement: HTMLElement): void {
        // definetly refactor this one
        nativeElement.animate(
                RapidAnimationType.START === animationType ? 
                    this._toastShowTransition : {}, this._toastShowTiming
            );
    }
}