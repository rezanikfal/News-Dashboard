import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaArticleListComponent } from './na-article-list/na-article-list.component';
import { MaterialModule } from "../material/material.module";
import { TrimOutletNamePipe } from './trim-outlet-name.pipe';



@NgModule({
  declarations: [NaArticleListComponent, TrimOutletNamePipe],
  imports: [
    CommonModule,MaterialModule
  ],
  exports:[NaArticleListComponent]
})
export class NewsApiModule { }
