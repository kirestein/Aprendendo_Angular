import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
// Fazer o import dos componentes que serão roteados
import { RouterModule, Routes } from '@angular/router';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'faleconosco', component:FaleConoscoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
