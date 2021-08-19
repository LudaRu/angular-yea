import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Lesson, Video} from "./lesson";
import {lessons, videos} from "./demo";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PlayListService {
  public lessons = new BehaviorSubject<Lesson[] | null>(lessons);
  public _videos$ = new BehaviorSubject<Video[] | null>(videos);
  public selectedVideo = new BehaviorSubject<{ src: string, time: string } | null>(null);

  public videos: Video[] | null = null

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this._videos$.subscribe((videos) => {
      if (videos === null) return
      this.videos = videos;
      this.selectedVideo.next({src: videos[0].src, time: '0'})
    })
  }

  selectVideo(courseId:string, videoId: string, time: string) {
    if (videos !== null) {
      let findVideo = [];
      findVideo = videos.filter((video) => video.id === videoId.toString())

      if (findVideo.length) {
        this.router.navigate(['/course', courseId, 'video', videoId])
        this.selectedVideo.next({src: findVideo[0].src, time: time})
      }
    }
  }

}
