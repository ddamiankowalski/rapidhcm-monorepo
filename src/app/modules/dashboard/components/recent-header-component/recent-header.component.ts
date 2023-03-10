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
        },
        { 
            title: 'Maps component',
            subtitle: `Watch where you're going`,
            description: 'Simply explore the world, see how to get from one place to another',
            image: 'maps.jpg'
        },
        { 
            title: 'Timetracking component',
            subtitle: `What's the time?`,
            description: 'Track your time in our easy to use timetracking module, see how long it will last until you have worked full-time',
            image: 'time.jpg'
        }
    ];
}