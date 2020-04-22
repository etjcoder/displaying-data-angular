import { HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';


export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // if (req.url) CAN DO AN IF CHECK TO LIMIT CERTAIN FUNCTIONS TO CERTAIN URLS/ROUTES
    console.log('Request is on its way');

   // // // HOW TO MODIFY REQUEST
    const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});
    return next.handle(modifiedRequest)
    // .pipe(tap(event => {
    //   if (event.type === HttpEventType.Response) {
    //     console.log('Response arrived, body data: ')
    //     console.log(event.body);
    //   }
    // }));


    // return next.handle(req);
  }
}
