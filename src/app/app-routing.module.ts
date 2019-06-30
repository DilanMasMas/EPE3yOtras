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
  { path: 'noticia1', loadChildren: './noticia1/noticia1.module#Noticia1PageModule' },
  { path: 'noticia2', loadChildren: './noticia2/noticia2.module#Noticia2PageModule' },
  { path: 'noticia3', loadChildren: './noticia3/noticia3.module#Noticia3PageModule' },
  { path: 'noticia4', loadChildren: './noticia4/noticia4.module#Noticia4PageModule' },
  { path: 'noticia5', loadChildren: './noticia5/noticia5.module#Noticia5PageModule' },  { path: 'noticia6', loadChildren: './noticia6/noticia6.module#Noticia6PageModule' },
  { path: 'noticia7', loadChildren: './noticia7/noticia7.module#Noticia7PageModule' },
  { path: 'noticia8', loadChildren: './noticia8/noticia8.module#Noticia8PageModule' },
  { path: 'noticia9', loadChildren: './noticia9/noticia9.module#Noticia9PageModule' },
  { path: 'noticia10', loadChildren: './noticia10/noticia10.module#Noticia10PageModule' },
  { path: 'noticia11', loadChildren: './noticia11/noticia11.module#Noticia11PageModule' },
  { path: 'deportes', loadChildren: './deportes/deportes.module#DeportesPageModule' },
  { path: 'ciencia', loadChildren: './ciencia/ciencia.module#CienciaPageModule' },
  { path: 'cultura', loadChildren: './cultura/cultura.module#CulturaPageModule' },
  { path: 'internacional', loadChildren: './internacional/internacional.module#InternacionalPageModule' },
  { path: 'resenas', loadChildren: './resenas/resenas.module#ResenasPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
