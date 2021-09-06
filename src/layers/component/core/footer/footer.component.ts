import { Component, OnInit } from '@angular/core';
import { Constants } from '../../../../util/constants';

@Component({
  selector: 'tsai-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version: string;

  constructor() { this.version = Constants.version }

  ngOnInit(): void {
  }

}
