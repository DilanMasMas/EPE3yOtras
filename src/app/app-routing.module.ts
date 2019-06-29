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
  { path: 'noticia5', loadChildren: './noticia5/noticia5.module#Noticia5PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
