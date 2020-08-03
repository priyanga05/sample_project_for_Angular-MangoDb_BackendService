import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import {ChildComponent} from './child/child.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SearchService} from './search.service';
import { SampComponent } from './samp/samp.component';
import { SearchComponent } from './search/search.component'
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SampComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
   
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
