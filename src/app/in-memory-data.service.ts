import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let notes = [
      {id: 11, name: 'M',contents:'aas'},
      {id: 12, name: 'N',contents:'aas'},
      {id: 13, name: 'B',contents:'aas'},
      {id: 14, name: 'C',contents:'aas'},
      {id: 15, name: 'M',contents:'aas'},
      {id: 16, name: 'R',contents:'aas'},
      {id: 17, name: 'D',contents:'aas'},
      {id: 18, name: 'D',contents:'aas'},
      {id: 19, name: 'M',contents:'aas'},
      {id: 20, name: 'T',contents:'aas'}
    ];
    return {notes};
  }
}