import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styles: []
})
export class RecoveryComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]]
    });
  }

  formSubmitted() {
    if (this.form.invalid) {
      return;
    }
    this.authService.recovery(this.form.value)
      .subscribe(
        res => {
          this.router.navigate(['/login']);
          this.toastr.success('Correo de recuperación enviado');
        }
      );
  }

}
