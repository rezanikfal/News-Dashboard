import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaArticleListComponent } from './na-article-list/na-article-list.component';
import { MaterialModule } from "../material/material.module";



@NgModule({
  declarations: [NaArticleListComponent],
  imports: [
    CommonModule,MaterialModule
  ],
  exports:[NaArticleListComponent]
})
export class NewsApiModule { }
