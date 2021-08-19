import {AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {PlayListService} from "../../services/play-list.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit, AfterViewInit, OnDestroy {
  selectedTitle = 0;
  selectedVideoId = '0';
  search = '';
  courseId = '';

  subscriptions: Subscription[] = [];


  constructor(
    public playListService: PlayListService,
    public activatedRoute: ActivatedRoute
  ) {
    this.selectVideo.bind(this)
  }

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.params.courseId;
    if (this.activatedRoute.firstChild) {
      const subscription1$ = this.activatedRoute.firstChild.params.subscribe(params => {
        if (params.videoId) {
          this.selectedVideoId = params.videoId;
        }
      })
      this.subscriptions.push(subscription1$);
    }
  }

  selectVideo(videoId: string, time: string, i: number) {
    this.selectedTitle = i
    this.selectedVideoId = videoId
    this.playListService.selectVideo(this.courseId, videoId, time)
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
