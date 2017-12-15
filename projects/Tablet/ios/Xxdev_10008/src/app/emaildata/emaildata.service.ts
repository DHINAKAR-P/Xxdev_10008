import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SharedService } from '../shared/shared.service';
import { IEmaildata } from './emaildata';

@Injectable()
export class EmaildataService {
    public selected_id: number;
    public selected_emaildata_id: number;
    constructor(private _http : Http, private shared_service: SharedService){}

    private handleError(error : Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    create_Emaildata(emaildata: IEmaildata): Observable<IEmaildata>{
        return this._http.post(`${this.shared_service.baseUrl}/Emaildata_Default_Activity/Emaildata/`,emaildata)
            .map((response : Response) => <IEmaildata> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    update_Emaildata(emaildata: IEmaildata): Observable<IEmaildata>{
        return this._http.put(`${this.shared_service.baseUrl}/Emaildata_Default_Activity/Emaildata/`,emaildata)
            .map((response : Response) => <IEmaildata> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    search_for_update_Emaildata(emaildata_id: number): Observable<IEmaildata>{
        return this._http.get(`${this.shared_service.baseUrl}/Emaildata_Default_Activity/Emaildata/${emaildata_id}`)
            .map((response : Response) => <IEmaildata> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    delete_Emaildata(emaildata: IEmaildata): Observable<IEmaildata>{
        return this._http.delete(`${this.shared_service.baseUrl}/Emaildata_Default_Activity/Emaildata/${emaildata.id}`)
            .map((response : Response) => <IEmaildata> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    get_all_Emaildata(): Observable<IEmaildata[]>{
        return this._http.get(`${this.shared_service.baseUrl}/Emaildata_Default_Activity/Emaildata/`)
            .map((response : Response) => <IEmaildata[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    search_detail_Emaildata(emaildata_id: number): Observable<IEmaildata>{
        return this._http.get(`${this.shared_service.baseUrl}/Emaildata_Default_Activity/Emaildata/${emaildata_id}`)
            .map((response : Response) => <IEmaildata> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
}