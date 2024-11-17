import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/logging.module').then(m => m.LoggingModule)
  },
  {
    path: '',
    component: HomePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
