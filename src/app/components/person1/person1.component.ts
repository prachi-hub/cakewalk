import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-person1',
  templateUrl: './person1.component.html',
  styleUrls: ['./person1.component.css']
})
export class Person1Component implements OnInit {

  data: any;

  chatForm: FormGroup;

  Btn: boolean = false;

  message = '';
  messages:any= [];

  keywords = '';

  constructor(private chatService: ChatService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.chatForm = this.formBuilder.group({
      message: ['']
    })

    this.messages = this.chatService.getAll();
    // console.log("person1 component===>",this.messages);

    this.Btn = !this.Btn;
  }

  submit(): void {
    // console.log("person1===>", this.chatForm.value);
    this.chatService.add(this.chatForm.value);
    this.chatForm.reset();
  }

}
