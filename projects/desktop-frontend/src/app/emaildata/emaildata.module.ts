import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmaildataCreationengComponent } from './emaildatacreationeng.component';
import { UpdateScreenengComponent } from './updatescreeneng.component';
import { ListEmailengComponent } from './listemaileng.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular/main';
import { EmaildataService } from './emaildata.service';

@NgModule({
    declarations: [
        EmaildataCreationengComponent,
        UpdateScreenengComponent,
        ListEmailengComponent
    ],
    imports: [
        FormsModule,
        MatInputModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'EmaildataCreationeng', component: EmaildataCreationengComponent},
            { path: 'UpdateScreeneng', component: UpdateScreenengComponent},
            { path: 'ListEmaileng', component: ListEmailengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        EmaildataService
    ]
})

export class EmaildataModule {

}