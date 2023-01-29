import {
    animate,
    group,
    query,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const smoothHeight = trigger('animationToggle', [
    transition('void <=> *', []),
    transition('* <=> *', [style({ height: '{{startHeight}}px', opacity: 0 }), animate('.5s ease')], {
      params: { startHeight: 0 }
    })
  ]);