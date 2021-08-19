import { Component, OnInit } from '@angular/core';
import {VgApiService, BitrateOptions } from "@videogular/ngx-videogular/core";
import {PlayListService} from "./services/play-list.service";

@Component({
  selector: 'app-player',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  constructor(
    public playListService: PlayListService
  ) {
  }

  ngOnInit(): void {
  }

}
