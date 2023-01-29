import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnChanges } from "@angular/core";

@Directive({
    selector: '[rapidHeightAnimation]',
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: { 
        '[style.display]': '"block"', 
        '[style.overflow]': '"hidden"',
        '(@animationToggle.done)': 'captureDoneEvent($event)',
    },
})
export class RapidDynamicDirective implements OnChanges, AfterViewInit {
    @Input() rapidHeightAnimation?: 'LoginView' | 'SignUpView' | 'RemindView';
      pulse: boolean | undefined;
      startHeight: number | undefined;

      constructor(private element: ElementRef) {}

      @HostBinding('@animationToggle')
      get animationToggle() {
        return { value: this.pulse, params: { startHeight: this.startHeight } };
      }

      setStartHeight() {
        this.startHeight = this.element.nativeElement.clientHeight;
      }

      ngOnChanges() {
        this.pulse = !this.pulse;
      }

      ngAfterViewInit(): void {
        this.setStartHeight();
      }

      captureDoneEvent() {
        this.setStartHeight();
      }
}