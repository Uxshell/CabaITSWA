import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VinosComponent } from './vinos/vinos.component';
import {VinoService} from './servicios/vino.service';
@NgModule({
  declarations: [
    AppComponent,
    VinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    VinoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
