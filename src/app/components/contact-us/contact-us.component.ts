import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { delay, of } from 'rxjs';

@Component({
	selector: 'contact-us',
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule, CommonModule],
	templateUrl: './contact-us.component.html',
	styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
	form!: FormGroup;
	loading: boolean = false;

	readonly days = [
		{ val: '', name: 'Preferred day *' },
		{ val: 'monday', name: 'Monday' },
		{ val: 'tuesday', name: 'Tuesday' },
		{ val: 'wednesday', name: 'Wednesday' },
		{ val: 'thursday', name: 'Thursday' },
		{ val: 'friday', name: 'Friday' },
		{ val: 'saturday', name: 'Saturday' },
		{ val: 'sunday', name: 'Sunday' },
	];

	readonly meetings = [
		{ val: '', name: 'Book a meeting' },
	];

	readonly times = [
		{ val: '', name: 'Pereferred time *' },
		{ val: '11', name: '11 AM' },
		{ val: '12', name: '12 PM' },
	];

	constructor() {
		this.form = new FormGroup({
			fullName: new FormControl('', Validators.required),
			email: new FormControl('', [Validators.required, Validators.email]),
			contactNum: new FormControl(''),
			meeting: new FormControl(''),
			day: new FormControl('', Validators.required),
			time: new FormControl('', Validators.required),
			message: new FormControl(''),
		})
	}

	get btnText() {
		return this.loading ? 'Sending...' : 'Submit';
	}

	submit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}
		console.log(this.form);
		this.loading = true;
		// mimic submission
		of({}).pipe(delay(1000)).subscribe(() => {
			this.loading = false;
			this.resetFields()
			alert('Submitted contacts');
		})
	}

	resetFields() {
		this.form.reset();
		this.form.patchValue({
			fullName: '',
			email: '',
			contactNum: '',
			meeting: '',
			day: '',
			time: '',
			message: '',
		}, { emitEvent: false });
	}
}
