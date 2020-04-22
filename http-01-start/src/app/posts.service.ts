import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model'
import { map, catchError, tap } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();

  constructor(
    private http: HttpClient
  ) { }

  // //////  // //////  // //////  // //////  // //////  // //////  // //////  // //////  // //////
      // //////  // ////// POST ROUTES
      // //////  // ////// POST ROUTES
      // //////  // ////// POST ROUTES
      // //////  // ////// POST ROUTES
    // //////  // //////  // //////  // //////  // //////  // //////  // //////// //////// //////// //////

  createAndStorePost(title: string, content: string) {
    // ...
    const postData: Post = {title: title, content: content}

    this.http
      .post<{name: string}>(
        'https://angular-test-ejc.firebaseio.com/posts.json',
        postData
        // ,{
        //   observe: 'response'
        // }
        )
        .subscribe(
         responseData => {
          console.log(responseData)
        },
         error => {
          this.error.next(error.message);
        });
  }


  // //////  // //////  // //////  // //////  // //////  // //////  // //////  // //////  // //////
      // //////  // ////// GET ROUTES
      // //////  // ////// GET ROUTES
      // //////  // ////// GET ROUTES
      // //////  // ////// GET ROUTES
    // //////  // //////  // //////  // //////  // //////  // //////  // //////// //////// //////// //////

  fetchPosts() {
    // ..
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty')
    searchParams = searchParams.append('custom', 'key')

    return this.http
      .get<{ [key: string]: Post }>('https://angular-test-ejc.firebaseio.com/posts.json',
      // {
      //   headers: new HttpHeaders({ "Customer-Header": 'Hello'}),
      //   params: searchParams
      // }
      )
      .pipe(

        map(responseData => {
        const postsArray: Post[] = [];

        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
          postsArray.push({...responseData[key], id: key })
        }

      }
      return postsArray;
      }),
      catchError(errorRes => {
        // Send to analytics  server
        return throwError(errorRes);

      })

      )
  }


  // //////  // //////  // //////  // //////  // //////  // //////  // //////  // //////  // //////
      // //////  // ////// DELETE ROUTES
      // //////  // ////// DELETE ROUTES
      // //////  // ////// DELETE ROUTES
      // //////  // ////// DELETE ROUTES
    // //////  // //////  // //////  // //////  // //////  // //////  // //////// //////// //////// //////

  deletePosts() {
    return this.http.delete('https://angular-test-ejc.firebaseio.com/posts.json',
    {
      observe: 'events',
      responseType: 'text'
        // also 'blob' for files, blob??
    }
    ).pipe(
      tap(event => {
        console.log(event)
        if (event.type === HttpEventType.Response) {
          console.log(event.body)
        }
        if (event.type === HttpEventType.Sent) {
          // ..
        }
      })
    )
  }

}



