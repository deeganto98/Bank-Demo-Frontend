import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http:HttpClient) { }

  createWallet(data): Observable<any> {
    return this.http.post("http://localhost:8080/bank/createwallet", data);
  }

  addMoney(data,money):Observable<any>{
    return this.http.post("http://localhost:8080/bank/addwalletmoney/"+money+"", data);
  }

}
