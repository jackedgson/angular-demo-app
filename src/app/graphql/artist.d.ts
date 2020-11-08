export interface ArtistModel {
  id: number
  name: string
  releases: {
    edges: ReleaseModel[]
  }
}

export interface ReleaseModel {
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
