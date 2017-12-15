import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IEmaildata } from './emaildata';
import {  } from '..//';

@Injectable()
export class EmaildataService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Emaildata(emaildata: IEmaildata): Observable<IEmaildata>{
        return this.apiService.post(this.config.api_url+`/Emaildata_Default_Activity/Emaildata/`,emaildata);

    }
    update_Emaildata(emaildata: IEmaildata): Observable<IEmaildata>{
        return this.apiService.put(this.config.api_url+`/Emaildata_Default_Activity/Emaildata/`,emaildata);

    }
    search_for_update_Emaildata(emaildata_id: number): Observable<IEmaildata>{
        return this.apiService.get(this.config.api_url+`/Emaildata_Default_Activity/Emaildata/${emaildata_id}`);

    }
    delete_Emaildata(emaildata: IEmaildata): Observable<IEmaildata>{
        return this.apiService.delete(this.config.api_url+`/Emaildata_Default_Activity/Emaildata/${emaildata.id}`);

    }
    get_all_Emaildata(): Observable<IEmaildata[]>{
        return this.apiService.get(this.config.api_url+`/Emaildata_Default_Activity/Emaildata/`);

    }
    search_detail_Emaildata(emaildata_id: number): Observable<IEmaildata>{
        return this.apiService.get(this.config.api_url+`/Emaildata_Default_Activity/Emaildata/search_detail/${emaildata_id}`);

    }
}