import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }
  teamblock = [
    {
      icon: 'assets/images/icon/icon-1.png',
      title: 'Networking With People',
      text: 'Events must be memorable to make an impact. Of course the desired impact depends on your goals.'
    },
    {
      icon: 'assets/images/icon/icon-2.png',
      title: 'Mentor Program',
      text: 'Events must be memorable to make an impact. Of course the desired impact depends on your goals.'
    },
    {
      icon: 'assets/images/icon/icon-3.png',
      title: 'Conference After Party',
      text: 'Events must be memorable to make an impact. Of course the desired impact depends on your goals.'
    }
  ];

  ngOnInit(): void {
  }

}
