import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SourcesComponent } from './sources/sources.component';

const routes: Routes = [
{
  path:'home',
  component: HomeComponent
},
{
  path:'headlines',
  component: HeadlinesComponent
},
{
  path:'sources',
  component: SourcesComponent
},
{
  path:'favorites',
  component: FavoritesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
