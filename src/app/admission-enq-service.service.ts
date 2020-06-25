import { AdmissionEnquiry } from './admission-enquiry';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmissionEnqServiceService {

  private _url: string;
  constructor(private http:HttpClient) { 
    this._url = 'http://localhost:8080/contact';
  }

  public saveEnquiryData(enquiry : AdmissionEnquiry){
    console.log("insideService");   
    console.log(enquiry);
     
    return this.http.post<AdmissionEnquiry>(this._url, enquiry);

  }

}


// OPEN ECLIPSE
// WRITE QUERIES in DAO
// CHECK WHEATHE RDATA IS INSERTED