import { Component, OnInit } from '@angular/core';
import { ChatStory } from '../chatstory.model';
import { AlertService } from "../../services/alert.service";

@Component({
  selector: 'app-crear-chatstory',
  templateUrl: './crear-chatstory.component.html',
  styleUrls: ['./crear-chatstory.component.scss']
})
export class CrearChatstoryComponent implements OnInit {
  view: string;
  chatStory: ChatStory;
  constructor(private alert: AlertService) {

      this.view="step1";
      this.chatStory = new ChatStory();
  }

  ngOnInit() {
    
  }

  changeView(str: string, chatstory: ChatStory){
    console.log(chatstory);
    this.chatStory=chatstory;
    this.view=str;
  }

}
