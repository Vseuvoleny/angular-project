import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  // { path: ':id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YouTubeRoutingModule {}
