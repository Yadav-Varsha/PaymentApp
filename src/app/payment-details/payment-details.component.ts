import { Component } from '@angular/core';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';
import { PaymentDetailService } from '../service/payment-detail.service';
import { NgFor } from '@angular/common';
import { PaymentDetail } from '../service/payment-detail.model';

@Component({
  selector: 'app-payment-details',
   standalone: true, // ✅ Add this
  imports: [PaymentDetailFormComponent,NgFor],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent {
constructor(public service:PaymentDetailService) {}
ngOnInit():void {
  this.service.refreshList();   
}
populateForm(selectedRecord:PaymentDetail) {
  this.service.formData = Object.assign({}, selectedRecord);
  

}
}