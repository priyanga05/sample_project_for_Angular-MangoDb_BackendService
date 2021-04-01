import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChildComponent} from './child/child.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SearchService} from './search.service';
import { SampComponent } from './samp/samp.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { EducationComponent } from './education/education.component'
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    ChildComponent,
    SampComponent,
    SearchComponent,
    RegisterComponent,
    EducationComponent
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
