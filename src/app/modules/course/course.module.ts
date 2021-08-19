import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseComponent} from './course.component';
import {CourseRoutingModule} from "./course-routing.module";
import {VgCoreModule} from "@videogular/ngx-videogular/core";
import {VgOverlayPlayModule} from "@videogular/ngx-videogular/overlay-play";
import {VgControlsModule} from "@videogular/ngx-videogular/controls";
import {VgBufferingModule} from "@videogular/ngx-videogular/buffering";
import {VgStreamingModule} from "@videogular/ngx-videogular/streaming";
import {LessonsListComponent} from './components/lessons-list/lessons-list.component';
import {VideoComponent} from './components/video/video.component';
import {PlayListService} from "./services/play-list.service";
import {SearchLessonsPipe} from './pipes/search-lessons.pipe';
import {FormsModule} from "@angular/forms";
import {MdbAccordionModule} from "mdb-angular-ui-kit/accordion";
import {PreviewComponent} from './components/preview/preview.component';
import { ScrollIntoViewDirective } from './scroll-into-view.directive';

@NgModule({
  declarations: [
    CourseComponent,
    LessonsListComponent,
    VideoComponent,
    SearchLessonsPipe,
    PreviewComponent,
    ScrollIntoViewDirective
  ],
  exports: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    VgCoreModule,
    VgOverlayPlayModule,
    VgControlsModule,
    VgBufferingModule,
    VgStreamingModule,
    FormsModule,
    MdbAccordionModule
  ],
  providers: [
    PlayListService
  ]
})
export class CourseModule {
}
