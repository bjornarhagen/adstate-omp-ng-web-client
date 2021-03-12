import { Component, OnInit } from '@angular/core'
import { Link } from 'src/app/models/Link'
import { LinksService } from '../../services/links/links.service'

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent implements OnInit {
  links: Link[]

  constructor(private linkService: LinksService) {}

  ngOnInit(): void {
    this.linkService.get().subscribe((links) => {
      this.links = links
    })
  }
}
