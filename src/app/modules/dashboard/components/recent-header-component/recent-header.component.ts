import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RapidRecentHeaderItem } from "shared/ui/src/lib/global/interfaces/recentheader.interface";

@Component({
    selector: 'rapid-recent-header',
    templateUrl: './recent-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidRecentHeaderComponent {
    public recentItems?: RapidRecentHeaderItem[] = [
        { 
            title: 'Weather component',
            subtitle: 'Is it windy?',
            description: 'Explore the weather in different places of the world and make sure you always know wh...',
            image: 'weather.jpg'
        }
    ];
}