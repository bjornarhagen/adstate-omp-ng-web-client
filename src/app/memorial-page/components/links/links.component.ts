import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router'
import { Link } from 'src/app/models/Link'
import { LinksService } from '../../services/links/links.service'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent implements OnInit {
  private orderId: number
  public links: Link[]

  constructor(private router: Router, private route: ActivatedRoute, private linkService: LinksService) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.orderId = Number(this.route.snapshot.paramMap.get('orderId'))
      this.linkService.get(this.orderId).subscribe((links) => {
        this.links = links
      })
    })
  }

  ngOnInit(): void {}
}
