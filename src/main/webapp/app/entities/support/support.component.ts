import { Component } from '@angular/core';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NgClass} from "@angular/common";
import {NzCollapseComponent, NzCollapsePanelComponent} from "ng-zorro-antd/collapse";

@Component({
  selector: 'jhi-support',
  standalone: true,
  imports: [
    NzButtonComponent,
    NgClass,
    NzCollapseComponent,
    NzCollapsePanelComponent
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {
  questions: any[] = [
    {
      active: true,
      name: 'How to register as a member?',
    },
    {
      active: false,
      name: 'How to deposit and what payment methods?'
    },
    {
      active: false,
      name: 'How can I invest and earn income?'
    },
    {
      active: false,
      name: 'How to deal with the problems in the operation?'
    }
  ];

}
