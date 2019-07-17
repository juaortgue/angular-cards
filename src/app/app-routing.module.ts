import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleCardsComponent } from './example-cards/example-cards.component';

const routes: Routes = [
  { path: '', redirectTo: 'example-cards', pathMatch: 'full' },
  { path: 'example-cards', component: ExampleCardsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
