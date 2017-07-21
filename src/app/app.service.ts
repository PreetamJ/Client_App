import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class POCService {
    private readAndStoreUrl = 'http://localhost:8080/readAndStore';
    private showTreeMapeUrl = 'http://localhost:8080/showTreeMap';

    constructor(private http: Http) { }

    readNStore() {
        console.log("Inside readNStore");
        return this.http.get(this.readAndStoreUrl).map(res => res.text);
    } 

    showTree() {
        console.log("Inside showTree");
        return this.http.get(this.showTreeMapeUrl)
            .map(response => response.json(),
                  error => console.log(error));
    }

    
}