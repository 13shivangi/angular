import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterWordComponent } from './filter-word/filter-word.component';
import { LighteningComponent } from './lightening/lightening.component';
import { LoginComponent } from './login/login.component';
import { TwitterServiceComponent } from './twitter-service/twitter-service.component';

const routes: Routes = [
  {path:"lightening",component:LighteningComponent},
  {path:"login",component:LoginComponent},
  {path:"filter-word",component:FilterWordComponent},
  {path:"twitter-service", component:TwitterServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
