import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/pages/auth.component';
import { DetailComponent } from './main/components/detail/detail.component';
import { FormCreateComponent } from './main/pages/form-create/form-create.component';
import { MainComponent } from './main/pages/main/main.component';
import { NotFoundComponent } from './not-found/pages/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'main',
    component: MainComponent,
    loadChildren: () =>
      import('./main/you-tube.module').then((m) => m.YouTubeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'create',
    component: FormCreateComponent,
    loadChildren: () =>
      import('./main/you-tube.module').then((m) => m.YouTubeModule),
    canActivate: [AuthGuard],
  },
  { path: 'main/:id', component: DetailComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent,
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
