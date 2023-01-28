import {
    animate,
    query,
    stagger,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const fadeOutTransition = trigger('routeAnimations', [
    transition('LoginView => RemindView', [
        query(
            ':leave, :enter', [
                style({
                    opacity: 0,
                })
            ]
        ),
        query(
            ':leave',
            [
                style({ opacity: 1 }),
                animate('500ms ease', style({ opacity: 0, visibility: 'hidden' })),
            ],
            { optional: true }
        ),
        query(':enter', [
            style({ opacity: 0 }),
            stagger(5000, [animate('500ms ease', style({ opacity: 1, height: '*', width: '*' }))]),
        ]),
    ]),
]);
