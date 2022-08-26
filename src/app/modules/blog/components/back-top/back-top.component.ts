import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.scss']
})
export class BackTopComponent implements OnInit {

  @Input() public tmpl!: TemplateRef<void>;

  myContext = {$implicit: 'sarena', localSk: 'Svet'};
  testContext = {name: 'linda', localSk: 'Svet'};


  constructor() { }

  public ngOnInit(): void {
  }

}
