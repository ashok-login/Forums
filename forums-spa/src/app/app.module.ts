import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';
import { MyquillEditorComponent } from './myquill-editor/myquill-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MyquillExample1Component } from './myquill-example1/myquill-example1.component';
import { EditMailTemplateComponent } from './edit-mail-template/edit-mail-template.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { DynamicSearchFilterComponent } from './dynamic-search-filter/dynamic-search-filter.component';
import { FilterPipe } from './filter.pipe';
import { MultipleCheckboxesComponent } from './multiple-checkboxes/multiple-checkboxes.component';

@NgModule({
  declarations: [
    AppComponent,
    MyquillEditorComponent,
    ValueComponent,
    NavComponent,
    LatestPostsComponent,
    MyPostsComponent,
    PageNotFoundComponent,
    MyquillExample1Component,
    EditMailTemplateComponent,
    AskQuestionComponent,
    DynamicSearchFilterComponent,
    FilterPipe,
    MultipleCheckboxesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
