import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpService} from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  Registration(reqdata:any){
    let header = {
      headers:new HttpHeaders({
      'Content-type':'application/json'
      })
      }
      return this.httpService.postService("user/userSignUp",reqdata,false,header)
  }
  login(reqdata:any){
    let header = {
      header:new HttpHeaders({
        'Content-type':'application/json'

      })
    }
    return this.httpService.postService("user/login",reqdata,false,header)
  }
  forgot(reqdata:any){
    let header ={
      header:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postService("user/reset",reqdata,false,header)
  }
  encode(data: any) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  reset(reqdata:any,token:any){
    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':token
      })
    }
    return this.httpService.postService("user/reset-password",this.encode(reqdata),true,header)
  }
}
