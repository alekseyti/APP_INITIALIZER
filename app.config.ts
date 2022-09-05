import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AppConfig {

    private _config: any;

    constructor(private httpClient: HttpClient) { }

    load(url){
        return () => this.httpClient.get(url +'api').pipe(
            tap(user => {
                this._config = user 
            })
        )
    }

    get config(): any {
        return this._config;
    }
}

