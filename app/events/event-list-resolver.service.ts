/**
 * NOTES:
 * - Resolver is used to load data BEFORE loading a route.
 * - Normally an Observable must be subscribed to in order for the http request to happen, but... (see next line)
 * - resolve() automatically 'subscribes' to the Observable so you don't need to add '.subscribe()' after getEvents()
 */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
	constructor (private eventService: EventService) {}

	resolve() {
		// Using .map instead of subscribe because we are inside ressolver
		// (events => events) is shorthand for (events => { return events })
		return this.eventService.getEvents();
	}
}
