import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { BindingsComponent } from './bindings/bindings.component';
import {FormsModule} from '@angular/forms';
import { IfComponent } from './if/if.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReversePipe } from './reverse.pipe';
import { SearchPipe } from './search.pipe';
import { UseSvcComponent } from './use-svc/use-svc.component';
import { UseHttpComponent } from './use-http/use-http.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    BindingsComponent,
    IfComponent,
    PipesComponent,
    ReversePipe,
    SearchPipe,
    UseSvcComponent,
    UseHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
