import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nouscontacter',
  templateUrl: './nouscontacter.component.html',
  styleUrls: ['./nouscontacter.component.scss']
})
export class NouscontacterComponent implements OnInit {
  signUpForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.InitForm();
  }
  InitForm() {

    this.signUpForm = this.formBuilder.group({
      name: ['', [ Validators.required]],
      email: ['', [ Validators.required]],
      subject: [''],
      message: ['', [ Validators.required]],
    });
  }
  onSubmit() {
    const name = this.signUpForm.get('name').value;
    const email = this.signUpForm.get('email').value;
    const subject = this.signUpForm.get('subject').value;
    const message = this.signUpForm.get('message').value;
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
