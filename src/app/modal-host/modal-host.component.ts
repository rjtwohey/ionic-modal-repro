import { Component, Input, Type, Injector } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';


@Component({
  selector: 'app-modal-host',
  templateUrl: './modal-host.component.html',
  imports: [NgComponentOutlet],
  styleUrls: ['./modal-host.component.scss'],
})
export class ModalHostComponent {
  @Input() component!: Type<unknown>;
  @Input() customInjector!: Injector;
}
