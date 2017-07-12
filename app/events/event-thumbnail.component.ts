import { Component, Input } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
	selector: 'event-thumbnail'
	, templateUrl: 'app/events/event-thumbnail.component.html'
	, styles: [`
		.thumbnail { min-height: 220px; }
		.pad-left { margin-left: 10px; }
		.well div { color: #bbb; }
		.green { color: #003300 !important; }
		.bold { font-weight: bold; }
	`]
})
export class EventThumbnailComponent {
	@Input() event: IEvent;

	getStartTimeClass() {
		// // Return Object
		// const isEarlyStart = this.event && this.event.time === '8:00 am';
		// return { green: isEarlyStart, bold: isEarlyStart };

		// // Return string
		// if (this.event && this.event.time === '8:00 am') {
		// 	return 'green bold';
		// }
		// return '';

		// Return string array
		if (this.event && this.event.time === '8:00 am') {
			return ['green', 'bold'];
		}
		return '';

	}
}
