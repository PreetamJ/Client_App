import { Component, OnInit } from '@angular/core';

import { POCService } from "../app.service";

@Component({
    selector: 'read-store',
    templateUrl: './read-store.component.html',
    styleUrls: ['./read-store.component.css']
})
export class ReadStoreComponent {
    message;
    dataObj;
    constructor(private pocService: POCService) {

    }

    ngOnInit() {

    }
    readAndStore() {
        console.log("Inside readAndStore");
        this.pocService.readNStore().subscribe(data => this.message = data,
            error => console.log(error));
        console.log(this.message);
        this.showTreeMap();
    }
    showTreeMap() {
        console.log("Inside showTreeMap");
        this.pocService.showTree().subscribe(data => this.dataObj =JSON.stringify(data),
            error => console.log(error));
        console.log("inside showTreeMap**" + this.dataObj);
    }

}