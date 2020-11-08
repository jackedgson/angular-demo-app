import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { AlbumsComponent } from './albums/albums.component'
import { GraphQLModule } from './graphql.module'
import { HttpClientModule } from '@angular/common/http'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [AppComponent, AlbumsComponent],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
