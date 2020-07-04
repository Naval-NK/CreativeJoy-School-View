import { Component, OnInit } from '@angular/core';
import { AdmissionEnquiry } from './../admission-enquiry';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmissionEnqServiceService } from '../admission-enq-service.service';
declare var $ : any;
@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  public ad_enq : AdmissionEnquiry;
  constructor(private route : ActivatedRoute,private router : Router,private enq_service : AdmissionEnqServiceService) { 
      this.ad_enq = new AdmissionEnquiry();
    }
  ngOnInit(): void {
    $('#exampleModal').on('shown.bs.modal', function () {
      $('#adform').trigger('focus')
    })
  }

  public array;
  public childName :string ;
  public parentName :string ;
  public parentMobile :string ;
  public grade :string ; 
  public parentEmail : string ; 
  public message : string;
  
  saveEnquiryForm(){
    console.log(this.ad_enq);    
    this.enq_service.saveEnquiryData(this.ad_enq).subscribe();
  }

  resetform(){
    $(':input').val('');
  }

}
