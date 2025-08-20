import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HouseStateModel} from './models/house-state.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  private readonly _httpClient: HttpClient = inject(HttpClient);

  houseState? : HouseStateModel;

  constructor() {

    this._httpClient.get<HouseStateModel>('https://localhost:7267/api/housestate').subscribe(
      (result) => {
        this.houseState  = result;
      }
    );
  }

  toggleLight() {
    this._httpClient.post<void>('https://localhost:7267/api/housestate',null).subscribe(
      () => {
        console.log("House state changed");
      }
    );
  }
}
