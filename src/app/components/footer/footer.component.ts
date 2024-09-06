import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { of, delay } from 'rxjs';

@Component({
	selector: 'footer',
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule, CommonModule],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss'
})
export class FooterComponent {
	form!: FormGroup;
	loading: boolean = false;
	constructor() {
		this.form = new FormGroup({
			fullName: new FormControl('', Validators.required),
			email: new FormControl('', [Validators.required, Validators.email])
		});
	}

	submit() {
		if (this.form.invalid) {
			return;
		}
		console.log(this.form);
		this.loading = true;
		// mimic submission
		of({}).pipe(delay(1000)).subscribe(() => {
			this.loading = false;
			this.resetFields();
			alert('Submitted for newsletter');
		})
	}

	resetFields() {
		this.form.reset();
		this.form.patchValue({
			fullName: '',
			email: '',
		}, { emitEvent: false });
	}

	get btnText() {
		return this.loading ? 'Sending...' : 'Submit';
	}
}
