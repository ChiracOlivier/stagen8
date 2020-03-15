import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produitsalimentaires',
  templateUrl: './produitsalimentaires.component.html',
  styleUrls: ['./produitsalimentaires.component.scss']
})
export class ProduitsalimentairesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private vcr: ViewContainerRef,
              private router: Router) { }

  ngOnInit(): void {
  }
  voirRecette() {
    this.router.navigate(['nouscontacter']);
  }
}
