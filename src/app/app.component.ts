import { Component } from '@angular/core';
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

    const firebaseConfig = {
      apiKey: 'AIzaSyBqIBGZr9N0iTIQihIXWqEzu0EmGAyZ-9Y',
      authDomain: 'flore1-380dc.firebaseapp.com',
      databaseURL: 'https://flore1-380dc.firebaseio.com',
      projectId: 'flore1-380dc',
      storageBucket: 'flore1-380dc.appspot.com',
      messagingSenderId: '379605375077',
      appId: '1:379605375077:web:e68e1be4856b8e862c8e8c',
      measurementId: 'G-85QHX8FZPE'
    };
    //  firebase.initializeApp(firebaseConfig);
  }
}
