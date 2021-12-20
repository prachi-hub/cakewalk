import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { io } from 'socket.io-client';
import { ChatService } from 'src/app/services/chat.service';

const SOCKET_ENDPOINT = 'localhost:3000';
@Component({
  selector: 'app-person1',
  templateUrl: './person1.component.html',
  styleUrls: ['./person1.component.css']
})
export class Person1Component implements OnInit {

  message = '';
  userName: string;
  output: any[] = [];
  feedback: string;

  constructor(
    private chatService: ChatService
  ) {
  }

  ngOnInit(): void {

    this.chatService.listen('typing').subscribe((data) => this.updateFeedback(data));
    this.chatService.listen('chat').subscribe((data) => this.updateMessage(data));
  }

  messageTyping(): void {
    this.chatService.emit('typing', this.userName);    
  }

  sendMessage(): void {
    this.chatService.emit('chat', {
      message: this.message,
      handle: this.userName
    });
    this.message = ""; 
  }

  updateMessage(data:any) {
    this.feedback = '';
    if(!!!data) return;
    console.log(`${data.handle} : ${data.message}`);
    this.output.push(data);
  }

  updateFeedback(data: any){
    this.feedback = `${data} is typing a message`;
  }
}
