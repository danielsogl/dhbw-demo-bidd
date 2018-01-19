import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ApiService } from './services/api.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [AppComponent, RegisterComponent, GameComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ApiService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
