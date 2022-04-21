import { CasaService } from './casa.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Icasa } from './case';


@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit, OnDestroy {
  pageTitle = 'Product List';
  errorMessage = '';

  casa: Icasa[] = [];
  subscription!: Subscription;

  constructor(private casaService: CasaService) { }

  ngOnInit(): void {
    this.subscription = this.casaService.getCase().subscribe({
      next: casa => {
        this.casa = casa;
      },
      error: (err: string) => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
