import { Component } from '@angular/core';

import { Constants } from '../../../../util/constants';

@Component({
  selector: 'tsai-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  version = Constants.version;
}
