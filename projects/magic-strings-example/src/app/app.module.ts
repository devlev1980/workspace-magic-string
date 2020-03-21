import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MagicStringModule} from '../../../magic-string/src/lib/magic-string.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MagicStringModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
