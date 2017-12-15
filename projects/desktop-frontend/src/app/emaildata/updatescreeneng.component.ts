import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { EmaildataService } from './emaildata.service';
import { IEmaildata } from './emaildata';
import {  } from '';

@Component({
    moduleId: module.id,
    templateUrl: 'updatescreeneng.component.html'
})
export class UpdateScreenengComponent implements OnInit {
  private emaildata: IEmaildata = {
  	id: 0,
  	sendername: '',	receivername: ''
  }
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private emaildataservice: EmaildataService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    if(!this.emaildata.id)
    	this.mymodalSFU.open();


    	if(this.emaildataservice.selected_id){
    	this.mymodalSFU.close();
    	this.emaildataservice.search_detail_Emaildata(this.emaildataservice.selected_id)
    	 .subscribe(data => {            
    	            this.toastr.success('Success!');
    	           this.emaildata = data;
    	          this.emaildataservice.selected_id = undefined;
    	         },
    	         error => {
    	           this.toastr.error('Check the browser console to see more info.','Error!');
    	         });
    	}


  }


  update_Emaildata(){
      this.emaildataservice.update_Emaildata(this.emaildata)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_Emaildata(){
      this.mymodalSFU.close();
      this.emaildataservice.search_for_update_Emaildata(this.emaildata.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.emaildata = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  delete_Emaildata(){
      this.emaildataservice.delete_Emaildata(this.emaildata)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}