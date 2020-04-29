import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GraphQLModule } from './graphql/graphql.module';

import { AppComponent } from './app.component';
import { PostModule } from './post/post.module';

const routes = []

@NgModule({
  imports:      [
    BrowserModule,
    GraphQLModule,
    FormsModule,
    PostModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
