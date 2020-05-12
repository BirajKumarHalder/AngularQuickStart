import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NewCmp2Component } from './new-cmp2/new-cmp2.component';
import { CustomDirDirective } from './custom-dir.directive';
import { CustomPipePipe } from './custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    NewCmp2Component,
    CustomDirDirective,
    CustomPipePipe,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
