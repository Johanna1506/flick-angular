import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'image', component: ImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
