import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { BandComponent } from './band/band.component';
import { MemberDetailComponent }   from './member-detail/member-detail.component';

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
    {
      path: 'members/:id',
      component: MemberDetailComponent
    }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
