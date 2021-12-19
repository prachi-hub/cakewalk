import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-person2',
  templateUrl: './person2.component.html',
  styleUrls: ['./person2.component.css']
})
export class Person2Component implements OnInit {

  message2: any = [];
  chatForm: FormGroup;

  chatData: any;
  message = '';
  messages: any = [];

  keywords = '';

  Btn: boolean = false;

  constructor(private chatService: ChatService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.chatForm = this.formBuilder.group({
      message: ['']
    });

    this.messages = this.chatService.getAll();
    // console.log("person2 component===>", this.messages);

    this.Btn = !this.Btn;
  }

  submit() {
    this.chatService.add(this.chatForm.value);
    this.chatForm.reset();
  }

}
