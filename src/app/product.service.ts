import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import  "rxjs/operators/map";

@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";

  constructor(private _http: Http) {}

  getAlbums(): Observable<Object> {
    return this._http
      .get(this._albumUrl)
      .pipe(tap((data) => console.log("All: " + JSON.stringify(data))));
  }

  getAlbum(id: number): Observable<Object> {
    return this._http.get(this._albumUrl).pipe(map((res) => res));
  }
}
