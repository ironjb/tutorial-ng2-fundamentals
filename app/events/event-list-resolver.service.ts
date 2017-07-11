// Resolver is used to load data BEFORE loading a route.
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
	constructor (private eventService: EventService) {}

	resolve() {
		// Using .map instead of subscribe because we are inside ressolver
		// (events => events) is shorthand for (events => { return events })
		return this.eventService.getEvents().map(events => events);
	}
}
