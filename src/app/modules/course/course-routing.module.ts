import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CourseComponent} from "./course.component";
import {PreviewComponent} from "./components/preview/preview.component";
import {VideoComponent} from "./components/video/video.component";

const routes: Routes = [
  {
    path: '', component: CourseComponent, children: [
      {path: '', component:  PreviewComponent },
      {path: 'video/:videoId', component:  VideoComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule {
}
