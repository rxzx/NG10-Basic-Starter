import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'private', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule) },
  // { path: '', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
