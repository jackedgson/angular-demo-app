export interface ArtistModel {
  id: number
  name: string
  releases: ReleasesModel[]
}

export interface ReleasesModel {
  edges: {
    node: {
      id: number
      title: string
      date: string
      coverArtArchive: {
        front: string
      }
      status: string
    }
  }
}
