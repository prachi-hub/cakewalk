import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  data: any;

  private paramSource = new BehaviorSubject(null);
  sharedParam = this.paramSource.asObservable();
  
  constructor() { }

  add(message: string) {
    if (localStorage.getItem('chatData') == null) {
      let chatList: string[] = [];
      chatList.push(message);
      localStorage.setItem('chatData', JSON.stringify(chatList));
      // return list.length + 1;
    } else {
      let returnUrl: any = localStorage.getItem('chatData');
      let chatList: string[] = JSON.parse(returnUrl);
      chatList.push(message);
      localStorage.setItem('chatData', JSON.stringify(chatList));
    }
  }

  getAll() {
    let returnUrl: any = localStorage.getItem('chatData');
    
    if (returnUrl != null) {
      // console.log(JSON.parse(returnUrl))
      return JSON.parse(returnUrl);
    }
    return null;
  }

  sendData(data:any){
    this.paramSource.next(data);

  }

  getData(){
    return this.data;  
  }
}
