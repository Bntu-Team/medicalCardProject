import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { AuthComponent } from './component/auth/auth.component';
import { States } from './constant/states.constant';

const routes: Routes = [
  { path: States.LANDING, component: LandingComponent },
  { path: States.AUTH, component: AuthComponent },
  { path: '**', redirectTo: States.LANDING }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
