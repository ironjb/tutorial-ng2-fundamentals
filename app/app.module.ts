import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
	EventsListComponent
	, EventThumbnailComponent
	, EventService
	, EventDetailsComponent
	, CreateEventComponent
	, EventResolver
	, EventListResolver
	, CreateSessionComponent
	, SessionListComponent
	, DurationPipe
	, UpvoteComponent
	, VoterService
	, LocationValidator
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import {
	TOASTR_TOKEN
	, Toastr
	, JQ_TOKEN
	, CollapsibleWellComponent
	, SimpleModalComponent
	, ModalTriggerDirective
} from './common/index';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
	imports: [
		BrowserModule
		, FormsModule
		, ReactiveFormsModule
		, HttpModule
		, RouterModule.forRoot(appRoutes)
	]
	, declarations: [
		EventsAppComponent
		, EventsListComponent
		, EventThumbnailComponent
		, NavBarComponent
		, EventDetailsComponent
		, CreateEventComponent
		, Error404Component
		, CreateSessionComponent
		, SessionListComponent
		, CollapsibleWellComponent
		, DurationPipe
		, SimpleModalComponent
		, ModalTriggerDirective
		, UpvoteComponent
		, LocationValidator
	]
	, providers: [
		EventService
		, EventResolver
		, EventListResolver
		, AuthService
		, VoterService
		, { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
		, { provide: TOASTR_TOKEN, useValue: toastr }
		, { provide: JQ_TOKEN, useValue: jQuery }
	]
	, bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
	if (component.isDirty) {
		return window.confirm('You have not saved this event. Do you really want to cancel?');
	}
	return true;
}
