import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-servicestraiteurs',
  templateUrl: './servicestraiteurs.component.html',
  styleUrls: ['./servicestraiteurs.component.scss']
})
export class ServicestraiteursComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private vcr: ViewContainerRef,
              private router: Router) { }

  ngOnInit(): void {
  }

  voirRecette() {
    this.router.navigate(['nouscontacter']);
  }
}
