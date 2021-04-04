import { Component, OnInit } from '@angular/core';
import { WalletService } from './wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  addAmount:any;
  walletAmount = 0;
  message:String;

  constructor(private service:WalletService) { }

  ngOnInit(): void {

    this.service.createWallet(localStorage.getItem("email")).subscribe(rest=>{
      this.walletAmount = rest
    })

  }
  addMoney(){
    this.service.addMoney(localStorage.getItem("email"),this.addAmount).subscribe(rest=>{

      this.walletAmount = rest.money;
      this.message = rest.message;

    })
  }

}
