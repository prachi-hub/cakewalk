import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Person1Component } from './components/person1/person1.component';
import { Person2Component } from './components/person2/person2.component';

const routes: Routes = [
  { path: '', component: Person1Component},
  { path: 'person2', component: Person2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
