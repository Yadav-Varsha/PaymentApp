import { Component } from '@angular/core';
import { PaymentDetailService } from '../../service/payment-detail.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from '../../service/payment-detail.model';
import { ToastrService } from 'ngx-toastr'; // ✅ Import ToastrService

@Component({
  selector: 'app-payment-detail-form',
  standalone: true, // ✅ Add this
  imports: [FormsModule],
  templateUrl: './payment-detail-form.component.html',
  styles: ``,
  
})
export class PaymentDetailFormComponent {
 constructor(public service: PaymentDetailService,private toastr:ToastrService) {}
 onSubmit(form:NgForm) {
  this.service.formSubmitted = true; // ✅ Set formSubmitted to true
  if(form.valid){
//   this .service.postPaymentDetail().subscribe({
//     next: (res) => {
//      this.service.list=res as PaymentDetail[];
//       this.service.resetForm(form);
//       this.toastr.success('Inserted succesfully','Payment detail Register'); // ✅ Show success message
//  },
//  error: (err) => {
//    console.log(err);
//  }
// })
if(this.service.formData.paymentDetailId == 0) 
   this.insertRecord(form);
  else
  this.updateRecord(form);
  }
 }

 insertRecord(form: NgForm) {
 this .service.postPaymentDetail().subscribe({
    next: (res) => {
     this.service.list=res as PaymentDetail[];
      this.service.resetForm(form);
      this.toastr.success('Inserted succesfully','Payment detail Register'); // ✅ Show success message
 },
 error: (err) => {
   console.log(err);
 }
})
  }

  updateRecord(form: NgForm) {
this .service.putPaymentDetail().subscribe({
    next: res => {
     this.service.list=res as PaymentDetail[];
      this.service.resetForm(form);
      this.toastr.info('Updated successfully','Payment detail Register'); // ✅ Show success message
 },
 error: err => {
   console.log(err);
 }
})
}
}