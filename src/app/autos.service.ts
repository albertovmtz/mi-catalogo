import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Automovil } from './models';
import { Observable, of } from 'rxjs';
import { AUTOMOVILES } from './data';
import { MessagesService } from './messages.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutosService {


  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos/limit/100';
  private autosActionsURL = 'https://catalogo-autos.herokuapp.com/api/autos';
  constructor(private http: HttpClient, private messagesServices: MessagesService) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosURL).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(()=> this.messagesServices.add('Productos Obtenidos'))
    )
  }

  updateAutos(auto: Automovil): Observable<any>{
    return this.http.put<any>(`${this.autosActionsURL}/${auto._id}`, auto).pipe(
      catchError(this.handleError<any>('addAuto')),
      tap((result) =>{
        this.messagesServices.add(`Auto actualizado con id: ${result.data._id}`)
      })
    )
  }

  deleteAuto(auto: Automovil): Observable<any> {
    return this.http.delete<any>(`${this.autosActionsURL}/${auto._id}`).pipe(
      catchError(this.handleError<any>('addAuto')),
      tap((result) =>{
        this.messagesServices.add(`Auto eliminado con id: ${result.data._id}`)
      })
    )
  }

  addAuto(auto: Automovil): Observable<any> {
    return this.http.post<any>(this.autosActionsURL, auto).pipe(
      catchError(this.handleError<any>('addAuto')),
      tap((result) =>{
        this.messagesServices.add(`Auto agregado con id: ${result.data._id}`)
      })
    )
  }

  private handleError<T>(operation = 'operacion', result?: T){
    return(error: any): Observable<T> =>{
      this.messagesServices.add(`${operation} fallo: ${error.message}`);
      return of(result as T);
      
    }
  }
  
}

