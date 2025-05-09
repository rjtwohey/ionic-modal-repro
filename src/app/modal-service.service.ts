import { inject, Injectable, Injector } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { ModalHostComponent } from './modal-host/modal-host.component';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  #modalController = inject(ModalController);

  async open(customInjector: Injector) {
    const modal = await this.#modalController.create({
      component: ModalHostComponent,
      componentProps: {
        component: ModalComponent,
        customInjector,
      },
      focusTrap: true,
    });

    await modal.present();
  }
}
