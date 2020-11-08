import { Component, OnInit } from '@angular/core'
import { AppService } from '../app.service'
import { ArtistModel, ReleaseModel } from '../graphql/artist'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  artist: ArtistModel
  displayedColumns: string[] = ['cover', 'title', 'date', 'status']

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.subscriber$.subscribe((data: ArtistModel) => {
      this.artist = data
    })
  }

  cleanData(data: ReleaseModel[]) {
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
