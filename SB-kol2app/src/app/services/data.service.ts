import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  private url = 'https://kol2tai.herokuapp.com/api/order/items';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url);
  }

  getById(id: number){
    return this.http.get(this.url+'/'+id.toString());
  }
}
