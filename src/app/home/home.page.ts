import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, LOCALE_ID, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public slideOneForm: FormGroup;
  public slideTwoForm: FormGroup;
  public submitAttempt: boolean = false;
  public msg: string = '';
  // title = 'i18nDemo';
  // languageList = [
  //   { code: 'en-US', label: 'English' },
  //   { code: 'hi', label: 'हिंदी' },
  //   // { code: 'es', label: 'Spanish' },
  // ];
  // , @Inject(LOCALE_ID) protected localeId: string
  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient

  ) {
    this.slideOneForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      phone: ['', Validators.compose([Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]*$'), Validators.required])],
      dob: ['', Validators.required]
    });

  }

  save() {

    if (!this.slideOneForm.valid) {
      this.submitAttempt = true;
    }

    else {
      this.submitAttempt = false;
      this.http.post<any>('http://demo8879799.mockable.io/registration', this.slideOneForm.value).subscribe(data => {
        this.msg = data.msg;
      })


    }
  }

}