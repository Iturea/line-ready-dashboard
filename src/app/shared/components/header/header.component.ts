import {
  Component,
  NgModule,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../services';
import { UserPanelModule } from '../user-panel/user-panel.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title: string;

  apiButtonOptions: any;

  userMenuItems = [
    {
      text: 'Profile',
      icon: 'user',
    },
    {
      text: 'Logout',
      icon: 'runner',
      onClick: () => {
        this.authService.logOut();
      },
    },
  ];

  constructor(private authService: AuthService, commonService: CommonService) {
    this.apiButtonOptions = {
      icon: 'columnchooser',
      onClick: () => {
        window.location.href = commonService.routePath(
          window.location.href,
          'profile'
        );
      },
    };
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  };
}

@NgModule({
  imports: [CommonModule, DxButtonModule, UserPanelModule, DxToolbarModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}