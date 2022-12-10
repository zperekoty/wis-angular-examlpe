import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IRequest } from "src/types";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor(private http: HttpClient) {}

  send(request: IRequest): Observable<IRequest> {
    return this.http.post<IRequest>(
      "https://wis-ser-out.vercel.app/route/api/sendMessage",
      request,
      { headers: { "Access-Control-Allow-Origin": "origin" } }
    );
  }
}
