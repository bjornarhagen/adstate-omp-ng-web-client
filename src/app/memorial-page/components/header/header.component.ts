import { Component, Input, OnInit } from '@angular/core'
import { Person } from './props/Person'
import { Background } from './props/Background'

@Component({
  selector: 'app-omp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class OMPHeaderComponent implements OnInit {
  constructor() {}

  @Input() background: Background
  @Input() person: Person

  ngOnInit(): void {}
}
