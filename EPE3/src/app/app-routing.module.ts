import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home',   pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list', loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'otra/:id', loadChildren: './pagina-otra/pagina-otra.module#PaginaOtraPageModule' },
{ path: 'otra', loadChildren: './pagina-otra/pagina-otra.module#PaginaOtraPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
