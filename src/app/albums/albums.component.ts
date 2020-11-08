import { Component, OnInit } from '@angular/core'
import { AppService } from '../app.service'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  artist: any
  displayedColumns: string[] = ['cover', 'title', 'date', 'status']

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.subscriber$.subscribe((data) => {
      this.artist = data
    })
  }

  cleanData(data) {
    return (
      data
        // remove releases without cover art
        .filter(({ node }) => node.coverArtArchive.front !== null)
        // remove duplicates from list (public API has lots of duplicates)
        .filter(
          (v, i, a) => a.findIndex((t) => t.node.title === v.node.title) === i,
        )
    )
  }
}
