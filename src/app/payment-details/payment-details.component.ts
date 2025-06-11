import { Component } from '@angular/core';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';
import { PaymentDetailService } from '../service/payment-detail.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-payment-details',
  imports: [PaymentDetailFormComponent,NgFor],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent {
constructor(public service:PaymentDetailService) {}
ngOnInit():void {
  this.service.refreshList();   
}
}