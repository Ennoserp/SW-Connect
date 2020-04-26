import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MapComponent } from './map/map.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AboutComponent } from './about/about.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { ParticuliersComponent } from './particuliers/particuliers.component';
import { AssosComponent } from './assos/assos.component';
import { ContactComponent } from './contact/contact.component';
import { DonSpontaneComponent } from './don-spontane/don-spontane.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'map', component: MapComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'partenaires', component: PartenairesComponent },
  { path: 'particuliers', component: ParticuliersComponent },
  { path: 'associations', component: AssosComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'don_spontane', component: DonSpontaneComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }