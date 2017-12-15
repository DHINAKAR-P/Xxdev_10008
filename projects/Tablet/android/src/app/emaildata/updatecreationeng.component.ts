import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { EmaildataService } from './emaildata.service';
import { IEmaildata } from './emaildata';

@Component({
    templateUrl: 'updatecreationeng.component.html'
})
export class UpdateCreationengComponent implements OnInit {
  private emaildata: IEmaildata = {
  	id: 0,
  	sendername: '',	receivername: ''
  }
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

  constructor(private router: Router, private emaildataservice: EmaildataService) { 
  }

  ngOnInit() {
    if(!this.emaildata.id)
    	this.mymodalSFU.open();


  }


  update_Emaildata(){
      this.emaildataservice.update_Emaildata(this.emaildata)
          .subscribe(data => {
            console.log("data", data);
          });
  }
  search_for_update_Emaildata(){
      this.mymodalSFU.close();
      this.emaildataservice.search_for_update_Emaildata(this.emaildata.id)
          .subscribe(data => {
            console.log("data", data);
            this.emaildata = data
          });
  }
  delete_Emaildata(){
      this.emaildataservice.delete_Emaildata(this.emaildata)
          .subscribe(data => {
            console.log("data", data);
          });
  }

}