import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredName = '';
  enteredDesc = '';
  enteredAddress = '';
  enteredContact = '';
  enteredEmail = '';

  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      name: this.enteredName, desc: this.enteredDesc, address: this.enteredAddress, contact: this.enteredContact, email: this.enteredEmail
    };
    this.postCreated.emit(post);

  }

}
