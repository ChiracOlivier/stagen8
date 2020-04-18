
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

