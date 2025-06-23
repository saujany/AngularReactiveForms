import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Myservice{

 url="https://jsonplaceholder.typicode.com/users";
 jsonserver="http://localhost:3000/users";

urlcountry="https://localhost:7161/api/CountryState";
 urlstate="https://localhost:7161/api/CountryState";

  httpclient:HttpClient=inject(HttpClient);

  constructor() { }

  getdata():Observable<any>
  {
    return this.httpclient.get<any>(this.jsonserver);
  }

  postdata(data:any):Observable<any>
  {
    return this.httpclient.post(this.jsonserver,data);
  }

  geteditdatabyId(id:any)
  {
return this.httpclient.get(this.jsonserver+"/"+id);
  }

  deletedata(id:any)
  {
    return this.httpclient.delete(this.jsonserver+"/"+id);

  }
   getcountry()
  {
return this.httpclient.get(this.urlcountry);
  }

  getstatebycountry(country:any)
  {
return this.httpclient.get(this.urlstate+"/"+country);
  }
}
