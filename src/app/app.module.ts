
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { simpleReducer } from './reducers/simple.reducer';
import { postReducer } from './reducers/post.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './views/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      post: postReducer,
      message: simpleReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
