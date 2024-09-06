import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, ContactUsComponent, FooterComponent, MainComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'g-2';
}
