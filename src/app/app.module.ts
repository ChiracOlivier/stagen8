import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NouscontacterComponent } from './nouscontacter/nouscontacter.component';
import { AproposComponent } from './apropos/apropos.component';
// import {Http, HttpModule} from '@angular/http';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  {path: 'nouscontacter' , component: NouscontacterComponent},
  {path: 'apropos' , component: AproposComponent},
  /* {path: 'listeannonces' , component: ListeannoncesComponent, children: [
       {path: 'afficherpetitannonce' , component: AfficherpetitannonceComponent},
     ]},*/
  {path: 'home', component: HomeComponent},
  {path: 'errorpage' , component: ErrorpageComponent},
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'errorpage'}
];

/*export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NouscontacterComponent,
    AproposComponent,
    ErrorpageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
