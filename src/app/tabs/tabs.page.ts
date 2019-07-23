import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { FaultsCreatePage } from '../faults-create/faults-create.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public modalController: ModalController) {
 //  	const modal = await this.modalController.create({
	// 	component: FaultsCreatePage
	// });
  }

  async openModal() {
	const modal = await this.modalController.create({
		component: FaultsCreatePage
	});
	return await modal.present();
  }

}
