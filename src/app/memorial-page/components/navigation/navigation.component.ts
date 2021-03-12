import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-omp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class OMPNavigationComponent implements OnInit {
  constructor() {}

  @Input() section: String

  ngOnInit(): void {}
}
