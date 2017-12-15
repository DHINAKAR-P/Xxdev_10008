import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { EmaildataService } from './emaildata.service';
import { GridOptions } from 'ag-grid';
import { IEmaildata } from './emaildata';

@Component({
    templateUrl: 'listscreeneng.component.html'
})
export class ListScreenengComponent implements OnInit {
  private Table_103251GridOptions: GridOptions;

  private emaildata: IEmaildata = {
  	id: 0,
  	sendername: '',	receivername: ''
  }
  ;

  constructor(private router: Router, private emaildataservice: EmaildataService) { 
    this.Table_103251GridOptions = {
    	columnDefs: [
    		{
    			headerName: "SenderName",
    			field: "sendername",
    		},
    		{
    			headerName: "ReceiverName",
    			field: "receivername",
    		}
    	],

    	rowData : [],
    	rowSelection: 'single',
    	onRowClicked: function(event) {
    		console.log('a row was clicked');
    	}
    };

  }

  ngOnInit() {
  }


  get_all_Emaildata(){
      this.emaildataservice.get_all_Emaildata()
          .subscribe(data => {
            console.log("data", data);
          });
  }

}