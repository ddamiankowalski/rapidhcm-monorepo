import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RapidRecentHeaderItem } from '../../../interfaces/recentheader.interface';

@Component({
    selector: 'rapid-recent-header-item',
    templateUrl: './rapid-recent-header-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidRecentHeaderItemComponent {
    @Input() item?: RapidRecentHeaderItem;
}