import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { EmaildataService } from './emaildata.service';
import { IEmaildata } from './emaildata';

@Component({
    templateUrl: 'tabletemailcreationeng.component.html'
})
export class TabletEmailCreationengComponent implements OnInit {
  private emaildata: IEmaildata = {
  	id: 0,
  	sendername: '',	receivername: ''
  }
  ;

  constructor(private router: Router, private emaildataservice: EmaildataService) { 
  }

  ngOnInit() {
  }


  create_Emaildata(){
      this.emaildataservice.create_Emaildata(this.emaildata)
          .subscribe(data => {
            console.log("data", data);
          });
  }

}