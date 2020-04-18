import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Value1} from "../models/Value1.model";
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-nouscontacter',
  templateUrl: './nouscontacter.component.html',
  styleUrls: ['./nouscontacter.component.scss']
})
export class NouscontacterComponent implements OnInit {
  private submissionForm: AngularFirestoreCollection<any>;
  submitting = false;
  submitted = false;
  signUpForm: FormGroup;
  errorMessage: string;
  value1: Value1 = {
    email1: 'bantoumeric@gmail.com',
    email2: 'chiracolivier28@gmail.com', // 'bantoumexotique@hotmail.fr',
    subject: '',
    text: '<p>   Bonjour </P> ',
    html: '<p>   Bonjour  </P> '
  };
  constructor(private formBuilder: FormBuilder,
              private firestore: AngularFirestore,
              private router: Router) { }

  ngOnInit() {
    this.submissionForm = this.firestore.collection('submissions');
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
    this.value1.subject = subject;
    this.value1.text = `<p>Nom: ${name}<br><br>Email: ${email}<br><br>Message: ${message}</p>`;
    this.value1.html = `<p>Nom: ${name}<br><br>Email: ${email}<br><br>Message: ${message}</p>`;
    this.submitting = true;
    console.log(this.value1);
    this.submissionForm.add(this.value1).then(res => {
      this.submitted = true;
    }).catch(err => {console.log('voici lerreur:'); console.log(err);}
    ).finally(() => {
      this.submitting = false;
    });
    console.log(this.submitted);
    document.forms['contact'].reset();
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
