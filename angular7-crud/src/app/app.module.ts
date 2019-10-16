import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { ArticleComponent } from './article.component';
import { ArticleService } from './article.service';
 
@NgModule({
imports: [
BrowserModule,
HttpClientModule,
ReactiveFormsModule
],
declarations: [
AppComponent,
ArticleComponent
],
providers: [
ArticleService
],
bootstrap: [
AppComponent
]
})
export class AppModule { }