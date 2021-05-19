import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public formResponse: string | any ;
  public formStatus: string | any;
  public sendEmail(e: Event) {
    e.preventDefault();
    var contactForm = <HTMLFormElement>document.getElementById('contact-form');
    emailjs.sendForm('smtp_server', 'template_8uQnFG6N_clone', e.target as HTMLFormElement, 'user_XWPdjpTv0DgrQb9FN3tWr')
      .then(() => {
        //reset here
        contactForm.reset();
        this.formStatus = 'success';
        this.formResponse = 'Your message has been sent successfully, we will get back to you shortly.';
      }, () => {
        this.formStatus = 'danger';
        this.formResponse = 'There was an error submitting your form.';
      });
  }

  ngOnInit(): void {
  }

}
