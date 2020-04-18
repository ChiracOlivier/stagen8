import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NouscontacterComponent } from './nouscontacter/nouscontacter.component';
import { AproposComponent } from './apropos/apropos.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DiversesinfosComponent } from './diversesinfos/diversesinfos.component';
import { ProduitsalimentairesComponent } from './produitsalimentaires/produitsalimentaires.component';
import { ProduitscosmetiquesComponent } from './produitscosmetiques/produitscosmetiques.component';
import { ServicestraiteursComponent } from './servicestraiteurs/servicestraiteurs.component';
import {CarouselModule} from 'ngx-bootstrap';
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/firestore";
import {environment} from "../environments/environment.prod";
import {AngularFireModule} from "@angular/fire";

const appRoutes: Routes = [
  {path: 'nouscontacter' , component: NouscontacterComponent},
  {path: 'diversesinfos' , component: DiversesinfosComponent},
  {path: 'produitsalimentaires' , component: ProduitsalimentairesComponent},
  {path: 'produitscosmetiques' , component: ProduitscosmetiquesComponent},
  {path: 'servicestraiteurs' , component: ServicestraiteursComponent},
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
    HomeComponent,
    DiversesinfosComponent,
    ProduitsalimentairesComponent,
    ProduitscosmetiquesComponent,
    ServicestraiteursComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule.enablePersistence(),
    /*  TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }),*/
    FormsModule,
    CarouselModule,
    CarouselModule.forRoot()
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
