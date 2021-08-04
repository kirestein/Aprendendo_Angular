import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { AlterarTextoDirective } from './alterar-texto.directive';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { HomeComponent } from './home/home.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    AlterarTextoDirective,
    ComponenteFilhoComponent,
    RoutingComponent
    
    // HomeComponent,
    // FaleConoscoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
