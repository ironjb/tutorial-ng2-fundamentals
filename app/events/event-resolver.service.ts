/**
 * NOTES:
 * - see notes from 'event-list-resolver.service.ts'
 */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { EventService } from './shared/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {
	constructor (private eventService: EventService) {}

	resolve(route: ActivatedRouteSnapshot) {
		// Using .map instead of subscribe because we are inside ressolver
		// (events => events) is shorthand for (events => { return events })
		return this.eventService.getEvent(route.params['id']);
	}
}
