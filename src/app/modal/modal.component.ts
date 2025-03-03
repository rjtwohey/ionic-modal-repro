import {Component, inject, OnInit} from '@angular/core';
import {ModalServiceService} from "../modal-service.service";
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  {
  #modal = inject(IonModal);

  close() {
    this.#modal.dismiss();
  }
}
