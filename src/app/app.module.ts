import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NavBarComponent} from './Components/NavBar/navbar.component'
import {AboutComponent} from './Components/About/about.component'
import {SearchComponent} from './Components/Search/search.component'
import { AppComponent }  from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [ { path: '', component: SearchComponent }, { path: 'about', component: AboutComponent } ]

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(routes),FormsModule  ],
  declarations: [ AppComponent,NavBarComponent,AboutComponent,SearchComponent],
  bootstrap:    [ AppComponent, ]
})
export class AppModule { }


