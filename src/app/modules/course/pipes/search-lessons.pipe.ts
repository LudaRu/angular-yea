import {Pipe, PipeTransform} from '@angular/core';
import {Lesson} from "../services/lesson";

@Pipe({
  name: 'searchLessons'
})
export class SearchLessonsPipe implements PipeTransform {

  transform(lessons: Lesson[] | null, searchValue: string): Lesson[] | null {
    if (!searchValue) return lessons;
    if (lessons === null) return null;

    let result: Lesson[] = [];
    lessons.forEach((lesson) => {
      const newLessons = {
        ...lesson,
        markers: lesson.markers.filter(marker => marker.text.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
      }
      if (newLessons.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || newLessons.markers.length) {
        result.push(newLessons);
      }
    });

    return result.length ? result : null;
  }

}
