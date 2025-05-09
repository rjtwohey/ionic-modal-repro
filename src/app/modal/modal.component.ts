import { Component, OnInit, inject } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [IonButton]
})
export class ModalComponent implements OnInit {
  #dir = inject(Dir);

  ngOnInit() {
    console.log('✅ Dir from modal:', this.#dir.value);
  }

  close() {
    (this as any).modal?.dismiss();
  }
}
