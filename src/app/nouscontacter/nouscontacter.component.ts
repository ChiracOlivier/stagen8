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
      politiConfidEtCondUsage: ['', [ Validators.required]],
    });
  }
  onSubmit() {
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    const politiConfidEtCondUsage = this.signUpForm.get('politiConfidEtCondUsage').value;
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
