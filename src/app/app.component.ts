import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { SurveyFormComponent } from './survey-form/survey-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly title = signal('customer-survey-frontend');
}
