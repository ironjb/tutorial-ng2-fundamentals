import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from './shared/event.service';
import { IEvent } from './shared/index';

@Component({
	templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
	events: IEvent[];

	constructor (private eventService: EventService, private route: ActivatedRoute) {}

	ngOnInit() {
		// // Subscribe to data... data may load after other components on page
		// this.eventService.getEvents().subscribe(events => this.events = events);

		// Resolver has loaded data before route to this page was made
		this.events = this.route.snapshot.data['events'];
	}
}
