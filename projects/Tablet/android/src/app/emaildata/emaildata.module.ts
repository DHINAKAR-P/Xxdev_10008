import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabletEmailCreationengComponent } from './tabletemailcreationeng.component';
import { UpdateCreationengComponent } from './updatecreationeng.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular/main';
import { EmaildataService } from './emaildata.service';

@NgModule({
    declarations: [
        TabletEmailCreationengComponent,
        UpdateCreationengComponent
    ],
    imports: [
        FormsModule,
        MatInputModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'TabletEmailCreationeng', component: TabletEmailCreationengComponent},
            { path: 'UpdateCreationeng', component: UpdateCreationengComponent}
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