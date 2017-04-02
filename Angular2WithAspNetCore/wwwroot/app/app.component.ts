import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    template: `<h1>My First {{appName}}</h1>`,
})
export class AppComponent {
    appName = 'Angular 2 App with ASP.NET Core';
}