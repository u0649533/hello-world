import { Injectable } from '@angular/core';

@Injectable()
export class FileDataService {
   getCourses() {
    return [ 'Archive 1', 'Archive2', 'Achive 3','Archive 1', 'Archive2'];
}

  constructor() { }

}
