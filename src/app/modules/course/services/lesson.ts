export interface Lesson {
  id:       string;
  title:    string;
  duration: string;
  trial:    string;
  markers:  Marker[] | [];
}

interface Marker {
  time: string;
  text: string;
}

export interface Video {
  src: string,
  type: string,
  id: string,
}
