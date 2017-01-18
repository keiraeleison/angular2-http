import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService {

  private usersUrl: string = 'https://reqres.in/api/users';
  constructor(private http: Http) {}

  /**
   * Get all users
   */
  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
      .map(res => res.json().data)
      .catch(this.handleError);
  }

  /**
   * Get a single user
   */
  getUser(): Observable<User> {
    return this.http.get('http://example.com')
      .map(res => res.json().data)
      .catch(this.handleError)
  };

  // create a user

  // update a user

  // delete a user

  /**
   * Handle errors from the API
   */
  private handleError(err) {
    let errMessage: string;
        if (err instanceof Response) {
          let body = err.json() || '';
          let error = body.error || JSON.stringify(body);
          errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
        } else {
          errMessage = err.message ? err.message : err.toString();
        }

        return Observable.throw(errMessage);
  }
}