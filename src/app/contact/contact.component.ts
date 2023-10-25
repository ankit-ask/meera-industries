import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactFG: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.contactFG = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
          ),
        ],
      ],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      message: ['', Validators.required],
    });
  }

  submitForm() {
    const endpoint =
      'https://apis.technomize.com/api/v1/notification/sendEmail';

    console.log(this.contactFG.value);

    if (this.contactFG.invalid) {
      alert('Please fill all the required fields correctly!');
      return;
    }

    const subject = 'Website Enquiry';
    const to = ['ankit.technomize@gmail.com'];
    const body = `
      Name: ${this.contactFG.value.fullName}
      Email: ${this.contactFG.value.email}
      Phone: ${this.contactFG.value.phoneNumber}
      Message: ${this.contactFG.value.message}
    `;

    this.httpClient.post<any>(endpoint, { to, subject, body }).subscribe({
      next: (response) => {
        console.log(response);
        this.contactFG.reset();
        alert(
          'Thank you for showing your interest. Our team will get back to you soon!'
        );
      },
      error: (error) => {
        alert(
          "Something doesn't seem right. Please recheck your form or try again after sometime!"
        );
      },
    });
  }
}
