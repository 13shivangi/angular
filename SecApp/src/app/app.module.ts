import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LighteningComponent } from './lightening/lightening.component';
import { FilterWordComponent } from './filter-word/filter-word.component';
import { BlacklistPipe } from './blacklist.pipe';
import { TwitterServiceComponent } from './twitter-service/twitter-service.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LighteningComponent,
    FilterWordComponent,
    BlacklistPipe,
    TwitterServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
