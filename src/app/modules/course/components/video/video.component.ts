import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import videojs, {VideoJsPlayerOptions} from 'video.js';
import {PlayListService} from "../../services/play-list.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoComponent implements OnInit, OnDestroy {
  @ViewChild('target', {static: true}) target!: ElementRef;

  options: VideoJsPlayerOptions = {
    controlBar: {
      pictureInPictureToggle: false
    },
    autoplay: true,
    preload: 'auto',
    nativeControlsForTouch: true,
    fluid: true,
    fill: true,
    playbackRates: [1, 1.5, 2]
  };

  courseId = false;
  videoId = false;

  player: videojs.Player | undefined;

  constructor(
    public playListService: PlayListService,
    public activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.courseId = this.activatedRoute.parent?.snapshot.params.courseId;
    let prevSrc = '';
    this.playListService.selectedVideo.subscribe((video) => {
      if (video) {
        if (!this.player) {
          this.player = this.target && videojs(this.target.nativeElement, this.options);
        }
        if (prevSrc !== video.src) {
          this.player.src({src: video.src, type: 'video/mp4'})
        }
        prevSrc = video.src;

        this.player.currentTime(+video.time)
        this.player.play();
      }
    })
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
