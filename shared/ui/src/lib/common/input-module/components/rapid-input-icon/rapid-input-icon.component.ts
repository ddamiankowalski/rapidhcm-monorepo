import { Component, Input, Output, ChangeDetectionStrategy, Inject, OnInit, EventEmitter } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { RapidInputIconsConfig, rapidInputIconsConfig, RAPID_INPUT_ICONS_CONFIG } from "../../configs/icon.config";
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'rapid-input-icon',
    templateUrl: './rapid-input-icon.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [
        {
            useValue: rapidInputIconsConfig,
            provide: RAPID_INPUT_ICONS_CONFIG
        }
    ],
    animations: [
        trigger('inputIcon', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('100ms', style({ opacity: 1 })),
            ]),
            transition(':leave', [
                animate('100ms', style({ opacity: 0 })),
            ])
        ])
    ]
})
export class RapidInputIconComponent implements OnInit {
    constructor(@Inject(RAPID_INPUT_ICONS_CONFIG) public rapidIconsConfig: RapidInputIconsConfig) {
        this.rapidIconsConfig['success'] = '';
    }

    @Output() iconToggle: EventEmitter<boolean> = new EventEmitter();
    
    @Input() control?: AbstractControl;
    @Input() inputValue?: string;
    @Input() iconType?: string;

    public iconToggleValue = false;

    ngOnInit(): void {
        console.log(this.rapidIconsConfig, this.control);
    }

    public iconClick(): void {
        this.iconToggleValue = !this.iconToggleValue;
        this.iconToggle.emit(this.iconToggleValue);
    }
}