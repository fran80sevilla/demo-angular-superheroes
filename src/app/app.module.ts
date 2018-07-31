import { BrowserModule } from '@angular/platform-browser';
// import para implantar el Pipe Hora local(LOCALE_ID)
import { NgModule, LOCALE_ID } from '@angular/core';
// hora local espaniola
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
// nueva funcion para el uso local
registerLocaleData(localeEs);

// Rutas: exportamos de nuestro componente de rutas las constante
import { APP_ROUTING } from './app.routes';

// no nos lo genera el proyecto, debemos importarlo para usar ngModel
import {FormsModule} from '@angular/forms';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// Servicios
import {HeroesService} from './services/heroes.service';
import {RelojService} from './services/reloj.service';
import { HeroeIndividualComponent } from './components/heroe-individual/heroe-individual.component';
import { PantallaBusquedaComponent } from './components/pantalla-busqueda/pantalla-busqueda.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { EjemplosPipesComponent } from './components/ejemplos-pipes/ejemplos-pipes.component';
import { CapitalizadoPipe } from './pipes/pipe-capitalizado.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    FooterComponent,
    HeroeIndividualComponent,
    PantallaBusquedaComponent,
    HeroeTarjetaComponent,
    EjemplosPipesComponent,
    CapitalizadoPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [HeroesService, RelojService, {provide: LOCALE_ID, useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
