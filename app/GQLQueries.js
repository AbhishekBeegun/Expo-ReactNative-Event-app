import { gql } from "@apollo/client";

export const ARTIST_QUERY = gql`
query MyQuery {
    artists {
      slug
      name
      mainPhoto {
        url
      }
      rating
      bookingPrice
    }
  }
`;  

export const ARTIST_DETAILS = gql `
query MyQuery ($slug: String){
    artist(where: {slug: $slug}) {
      artistDescription
      bookingPrice
      coverPhoto {
        url
      }
      mainPhoto {
        url
      }
      name
      slug
      rating
      gridPhoto {
        url
      }
      location
      videoLinks
      socialLinks
    }
  }
  `