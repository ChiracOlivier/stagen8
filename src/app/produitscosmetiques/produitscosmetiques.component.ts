import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produitscosmetiques',
  templateUrl: './produitscosmetiques.component.html',
  styleUrls: ['./produitscosmetiques.component.scss']
})
export class ProduitscosmetiquesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private vcr: ViewContainerRef,
              private router: Router) { }

  ngOnInit(): void {
  }

  voirRecette() {
    this.router.navigate(['nouscontacter']);
  }
}
