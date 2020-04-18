import { Component } from '@angular/core';
import * as firebase from "firebase";
// import * as firebase from 'firebase';
// import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stagen8';

  constructor() { // translate: TranslateService) {
    /* translate.addLangs(['en', 'fr']);

     // this language will be used as a fallback when a translation isn't found in the current language
     translate.setDefaultLang('en');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
     const browserLang = translate.getBrowserLang();
     translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');*/

    var firebaseConfig = {
      apiKey: "AIzaSyA_Qo4uWIpViEa6uuS-8u12AMagx881JQA",
      authDomain: "stagen8.firebaseapp.com",
      databaseURL: "https://stagen8.firebaseio.com",
      projectId: "stagen8",
      storageBucket: "stagen8.appspot.com",
      messagingSenderId: "868279122776",
      appId: "1:868279122776:web:8e8549b50098a988e1432d",
      measurementId: "G-EZJTDMR7B6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
