import { Component } from '@angular/core';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';
import { PaymentDetailService } from '../service/payment-detail.service';
import { NgFor } from '@angular/common';
import { PaymentDetail } from '../service/payment-detail.model';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-payment-details',
   standalone: true, // ✅ Add this
  imports: [PaymentDetailFormComponent,NgFor],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent {
constructor(public service:PaymentDetailService,private toastr:ToastrService) {}
ngOnInit():void {
  this.service.refreshList();   
}
populateForm(selectedRecord:PaymentDetail) {
  this.service.formData = Object.assign({}, selectedRecord);
  }

onDelete(id: number) {
   if(confirm('Are you sure to delete this record?')) 
  this.service.deletePaymentDetail(id).subscribe({
    next: (res) => {
     this.service.list=res as PaymentDetail[];
     
      this.toastr.error('Deleted succesfully','Payment detail Register'); // ✅ Show success message
 },
 error: (err) => {
   console.log(err);
 }
})


}
}