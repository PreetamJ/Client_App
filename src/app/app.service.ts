import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers, URLSearchParams } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class POCService {
    private readAndStoreUrl = 'http://localhost:8080/readAndStore';
    private showTreeMapeUrl = 'http://localhost:8080/showTreeMap';

    constructor(private http: Http) { }

    readNStore(formData) {
        console.log("Inside readNStore:service");
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.readAndStoreUrl, formData, options).map((res: Response) => res.text());
    }

    showTree(id: string) {
        console.log("Inside showTree :service");
        console.log("id **:" + id);
        let options = new RequestOptions({ search: new URLSearchParams('id=' + id) });

        return this.http.get(this.showTreeMapeUrl, options)
            .map(response => response.json(),
            error => console.log(error));

    }


}