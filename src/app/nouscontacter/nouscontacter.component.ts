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
    email2: 'bantoumexotique@hotmail.fr',
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
    this.submissionForm.add(this.value1).then(res => {
      this.submitted = true;
    }).catch(err => console.log(err)
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
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin=require('firebase-admin');
const nodemailer =require('nodemailer');
admin.initializeApp();
require('dotenv').config();

const {SENDER_EMAIL,SENDER_PASSWORD}= process.env;

exports.sendEmailNotification=functions.firestore.document('submissions/{docId}')
  .onCreate((snap,ctx)=>{
    const data=snap.data();
    let authData=nodemailer.createTransport({
      host: 'smtp.gmail.com', // 'smtp.1und1.de', // 'smtp.ionos.fr',
      port:465, // 25, // 587, // 465,
      secure:true,
      auth:{
        type: 'login',
        user: 'bantoumeric@gmail.com',
        pass: 'Bantoumeric7@'
      }
    });
    authData.sendMail({
      from :`${data.email1}`,
      to:`${data.email2}`,
      subject:`${data.subject}`,
      text:`${data.text}`,
      html:`${data.html}`
      /* amp: `<!doctype html>
     <html ⚡4email>
       <head>
         <meta charset="utf-8">
         <style amp4email-boilerplate>body{visibility:hidden}</style>
         <script async src="https://cdn.ampproject.org/v0.js"></script>
         <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
       </head>
       <body>
         <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
         <p>GIF (requires "amp-anim" script in header):<br/>
           <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
       </body>
     </html>`*/
    }).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));

  });
// Listens for new messages added to /messages/:pushId/original and creates an
/* uppercase version of the message to /messages/:pushId/uppercase
exports.detectNewMessage = functions.database.ref('/discussions/{FromId}/{ToId}')
  .onWrite((snapshot, context) => {
    // Grab the current value of what was written to the Realtime Database.
    const original = snapshot.val();
    console.log('Uppercasing', context.params.pushId, original);
    const uppercase = original.toUpperCase();
    // You must return a Promise when performing asynchronous tasks inside a Functions such as
    // writing to the Firebase Realtime Database.
    // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
    return snapshot.ref.parent.child('uppercase').set(uppercase);
  });*/
