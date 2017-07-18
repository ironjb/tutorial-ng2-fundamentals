/**
 * NOTES:
 * - Some methods in this Service are self-subscribing.
 * 		subscribe() is usually handled in the component,
 * 		but in this case an exception is being made to
 * 		handle it here since no interaction needs to happen
 * 		on client side.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ISession } from '../shared/event.model';

@Injectable()
export class VoterService {

	constructor(private http: Http) {}

	deleteVoter(eventId: number, session: ISession, voterName: string) {
		// client side update
		session.voters = session.voters.filter(voter => voter !== voterName);

		// server side update
		this.http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`).subscribe();
	}

	addVoter(eventId: number, session: ISession, voterName: string) {
		// client side update
		session.voters.push(voterName);

		// server side update
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

		this.http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe();
	}

	userHasVoted(session: ISession, voterName: string): boolean {
		return session.voters.some(voter => voter === voterName);
	}

	private handleError(error: Response) {
		return Observable.throw(error.statusText);
	}
}
