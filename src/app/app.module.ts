import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DashboardAssoComponent } from './dashboard-asso/dashboard-asso.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { AboutComponent } from './about/about.component';
import { ParticuliersComponent } from './particuliers/particuliers.component';
import { AssosComponent } from './assos/assos.component';
import { FooterComponent } from './pied-de-page/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { DonSpontaneComponent } from './don-spontane/don-spontane.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AccueilComponent,
    DashboardAssoComponent,
    MapComponent,
    PartenairesComponent,
    AboutComponent,
    ParticuliersComponent,
    AssosComponent,
    FooterComponent,
    ContactComponent,
    DonSpontaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
