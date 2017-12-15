import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { EmaildataService } from './emaildata.service';
import { GridOptions } from 'ag-grid';
import { IEmaildata } from './emaildata';
import {  } from '';

@Component({
    moduleId: module.id,
    templateUrl: 'listemaileng.component.html'
})
export class ListEmailengComponent implements OnInit {
  private Table_103104GridOptions: GridOptions;

  private emaildata: IEmaildata = {
  	id: 0,
  	sendername: '',	receivername: ''
  }
  ;

  private array_Emaildata: IEmaildata[] = [];

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private emaildataservice: EmaildataService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_103104GridOptions = {
    	enableFilter: true,
    	enableSorting: true,
    	pagination: true,
    	columnDefs: [
    		{
    			headerName: "SenderName",
    			field: "sendername",
    			filter: "text"
    		},
    		{
    			headerName: "ReceiverName",
    			field: "receivername",
    			filter: "text"
    		}
    	],

    	rowData : [],	rowSelection: 'single',
    	onRowClicked: this.search_detail_Emaildata.bind(this)
    };

  }

  ngOnInit() {
  }

  search_detail_Emaildata(event){
  	this.emaildataservice.selected_id = event.data.id;
  	this.router.navigate(['/UpdateScreeneng']);
  }

  get_all_Emaildata(){
      this.emaildataservice.get_all_Emaildata()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.array_Emaildata = data

          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}