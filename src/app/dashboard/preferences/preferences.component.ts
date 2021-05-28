import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  myPrefs: FormGroup;
  isSubmitted = false;
  visibleStates: Array<any>;

  constructor(private formBuilder: FormBuilder) {
    this.myPrefs = this.createForm();
    this.visibleStates = [
      { val: 1, text: 'For me only' },
      { val: 2, text: 'For my friends' },
      { val: 3, text: 'For everyone' },
    ];
  }

  ngOnInit(): void { }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.myPrefs?.invalid) {
      return;
    }
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      nickname: '',
      firstname: '',
      secondname: '',
      name_visible: '',
      email: '',
      email_news: '',
      number: '',
    });
  }

  setNameVis(e: any): void {
    this.myPrefs.controls.name_visible.setValue(e.target.value);

    console.log(e.target.value);
  }

}
