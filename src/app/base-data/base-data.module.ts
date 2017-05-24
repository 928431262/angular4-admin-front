import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { ShareModule } from '../share/share.module';
import { MdNativeDateModule } from '@angular/material';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { baseDataRoutes } from './base-data.routing';
import { PersonManageService } from './person-manage.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ShareModule,
        MdNativeDateModule,
        ReactiveFormsModule,
        RouterModule.forChild(baseDataRoutes)
    ],
    declarations: [PersonListComponent, PersonAddComponent, PersonEditComponent],
    providers: [
        PersonManageService
    ]
})
export class BaseDataModule { }
