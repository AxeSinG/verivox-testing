import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-button',
  templateUrl: './list-item-button.component.html',
  styleUrls: ['./list-item-button.component.scss']
})
export class ListItemButtonComponent {
  @Input() public icon = '↑';
  @Input() public header = 'Upload';
  @Input() public text: string;
  @Input() public speed = 'Mbit/s';
  @Input() public containerClass: string;
}
