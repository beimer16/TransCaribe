import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'configuracion', loadChildren: './configuracion/configuracion.module#ConfiguracionPageModule' },
  { path: 'favorito', loadChildren: './favorito/favorito.module#FavoritoPageModule' },
  { path: 'ayuda', loadChildren: './ayuda/ayuda.module#AyudaPageModule' },
  { path: 'acercade', loadChildren: './acercade/acercade.module#AcercadePageModule' },
  { path: 'terminouso', loadChildren: './terminouso/terminouso.module#TerminousoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
