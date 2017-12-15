import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { EmaildataService } from './emaildata.service';
import { IEmaildata } from './emaildata';
import {  } from '';

@Component({
    moduleId: module.id,
    templateUrl: 'emaildatacreationeng.component.html'
})
export class EmaildataCreationengComponent implements OnInit {
  private emaildata: IEmaildata = {
  	id: 0,
  	sendername: '',	receivername: ''
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private emaildataservice: EmaildataService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Emaildata(){
      this.emaildataservice.create_Emaildata(this.emaildata)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}