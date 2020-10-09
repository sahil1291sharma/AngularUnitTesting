import {async, ComponentFixture, TestBed, inject, tick, fakeAsync} from '@angular/core/testing';

import {DebugElement} from '@angular/core';
//import {By} from '@angular/platform-browser';
import { DataService } from "../../services/data.service";
import { NotificationService } from "../../services/notification.service";
import {AdminComponent} from './admin.component';
import { NotifierService } from "angular-notifier";
import issues from '../../data/backlog.json'
import users from '../../data/users.json'

describe('AdminComponent', () => {
     let component: AdminComponent;
     let fixture: ComponentFixture<AdminComponent>;
     let de: DebugElement;

     beforeEach(async(() => {

       TestBed.configureTestingModule({
       providers: [NotificationService, DataService],
        declarations: [AdminComponent],

        })
        .compileComponents();
     }));

     it('should create the component AdminComponent',() => {
        expect(component).toBeTruthy();
     });


    })