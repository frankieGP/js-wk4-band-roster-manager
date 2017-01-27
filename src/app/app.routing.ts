import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { BandComponent } from './band/band.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
     path: 'about',
     component: AboutComponent
   },
   {
      path: 'band',
      component: BandComponent
    },

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
