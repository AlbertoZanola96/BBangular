import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Icasa } from './case';
import { map, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CasaService {
  private caseUrl = 'assets/case/case.json';

  constructor(private http: HttpClient) { }

  getCase(): Observable<Icasa[]> {
    return this.http.get<Icasa[]>(this.caseUrl);
  }

  getCasa(id: number): Observable<Icasa | undefined> {
    return this.getCase()
      .pipe(
        map((casa: Icasa[]) => casa.find(p => p.casaId === id))
      );
  }
}
