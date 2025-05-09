import { Component, inject, Injector } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ModalServiceService } from "../modal-service.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton],
})
export class Tab1Page {
  #modalService = inject(ModalServiceService);
  #injector = inject(Injector);

  open() {
    // Create a new injector, extending the current one with the Dir provider
    const customInjector = Injector.create({
      providers: [
        { provide: Dir, useClass: Dir, deps: [] }  // Add Dir to the injector
      ],
      parent: this.#injector,  // Extend from the current injector
    });

    // Pass the custom injector to the ModalService
    this.#modalService.open(customInjector);
  }
}
