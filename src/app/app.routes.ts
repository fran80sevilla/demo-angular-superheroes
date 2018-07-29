import { Routes, RouterModule } from '@angular/router';
// Componentes objetos de enrutamiento
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeIndividualComponent } from './components/heroe-individual/heroe-individual.component';
import { PantallaBusquedaComponent } from './components/pantalla-busqueda/pantalla-busqueda.component';
import { EjemplosPipesComponent } from './components/ejemplos-pipes/ejemplos-pipes.component';


// tenemos una constante que en realidad es un array
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about-us', component: AboutComponent },
    { path: 'heroe-individual/:id', component: HeroeIndividualComponent },
    // probamos no poner la barra en routerLink para que nos redireccione a un subdirectorio
    // app-navbar
    { path: 'app-navbar/pantalla-busqueda/:palabra', component: PantallaBusquedaComponent },
    { path: 'ejemplos-pipes', component: EjemplosPipesComponent },
    { path: '**', pathMatch:'full',redirectTo: 'home' }
];

// exportamos la constante APP_ROUTES
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});

