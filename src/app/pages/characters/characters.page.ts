import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  private segmentModel: string='four star'
  constructor() { }

  ngOnInit() {
  }

  segmentChange(event: any){
    console.log(event.target.value)
    this.segmentModel = event.target.value
  }

}
