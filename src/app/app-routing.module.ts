import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Person1Component } from './components/person1/person1.component';

const routes: Routes = [
  { path: '', component: Person1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
