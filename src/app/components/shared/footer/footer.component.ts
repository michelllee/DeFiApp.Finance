import {Component, OnInit, Input} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  @Input() layout: number | string | undefined;
  @Input() logo: number | string | undefined;
  @Input() bg: number | string | undefined;

  registrationLink = environment.registerLink;

  ngOnInit(): void {
  }

}
