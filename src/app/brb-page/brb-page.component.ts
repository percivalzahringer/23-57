import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-brb-page',
  styleUrls: ['./brb-page.component.css'],
  templateUrl: './brb-page.component.html',
})
export class BrbPageComponent implements OnInit {
  myFirstReactiveForm: UntypedFormGroup;

  public user: {
    name: string;
    name2: string;
    name3: string;
  } = JSON.parse(localStorage.getItem('key')) ?? {};

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    const controls = this.myFirstReactiveForm.controls;

    if (this.myFirstReactiveForm.invalid){
      Object.keys(controls)
      .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
 
   console.log(this.myFirstReactiveForm.value);
   const str = JSON.stringify(this.myFirstReactiveForm.value);
    localStorage.setItem ("key", str);
  }

  isControlInvalid (controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls [controlName]; 
    const result = control.invalid && control.touched;
    return result;
  }

  public initForm(){

    this.myFirstReactiveForm = this.fb.group({
      name: [
        this.user.name ?? 'Бара́бинск — город в России, административный центр Барабинского района Новосибирской области. Образует муниципальное образование город Барабинск со статусом городского поселения как единственный населённый пункт в его составе. По традиционному административно-территориальному устройству: город областного значения.', [
        Validators.required,
        Validators.pattern (/[А-я]/)
      ]
    ],
    name2: [
      this.user.name2 ?? 'Железнодорожная станция на Транссибирской магистрали. Барабинск является крупным железнодорожным узлом.', [
      Validators.required,
      Validators.pattern (/[А-я]/)
    ]
  ],
  name3: [
    this.user.name3 ?? 'Во время строительства Транссибирской магистрали болотистая местность вынудила проложить железную дорогу в стороне от города Каинск. В ближайшем к городу месте была построена железнодорожная станция «Каинск-Томский» (открыта в 1896), при которой возник посёлок служащих железной дороги. Поселение быстро развивалось, и в 1911 году появился проект создания на основе пристанционного посёлка (население которого к тому моменту уже достигло 4 тысяч человек) города — «Алексеевска». На заседании губернского присутствия по крестьянским делам, состоявшемся 18 марта 1911 года, было постановлено «посёлок при станции „Каинск“ признать подлежащим обращению в безуездный город с упрощённым управлением», однако по не вполне понятным причинам изменения статуса не произошло. Лишь к концу 1916 года посёлок при станции «Каинск» стал безуездным городом Томской губернии, названный «Барабинск» по расположению на Барабинской низменности.', [
    Validators.required,
    Validators.pattern (/[А-я]/)
  ]
]
    });
  }
}