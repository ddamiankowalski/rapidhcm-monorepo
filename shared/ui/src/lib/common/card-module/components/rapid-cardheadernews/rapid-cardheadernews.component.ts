import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'rapid-card-header-news',
    templateUrl: './rapid-cardheadernews.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidCardHeaderNewsComponent {
    @Input() title = '';
}