import gql from 'graphql-tag'

export const ARTIST_QUERY = gql`
  query ArtistInfo($name: String!) {
    search {
      artists(query: $name, first: 1) {
        edges {
          node {
            id
            name
            releases {
              edges {
                node {
                  id
                  title
                  date
                  coverArtArchive {
                    front
                    back
                  }
                  status
                  lastFM {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
