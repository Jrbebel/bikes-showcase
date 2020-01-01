import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styles: []
})
export class PasswordComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly settingsService: SettingsService,
  ) {

    this.form = new FormGroup({
      currentPassword: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password2: new FormControl(null, Validators.required)
    }, this.passwordsShouldMatch);

  }

  ngOnInit() {
  }

  private passwordsShouldMatch(group: FormGroup) {
    return group.get('password').value === group.get('password2').value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.form.invalid) { return; }
    delete this.form.value.password2;
    return this.settingsService.changePassword(this.form.value)
      .subscribe(
        res => {
          console.log('Contraseña cambiada.');
          this.form.reset();
        },
        error => console.log('HTTP error', error)
      );
  }

}
