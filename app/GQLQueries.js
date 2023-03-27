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
      deezerId
    }
  }
  `

  export const EVENT_QUERY = gql`
  query EventQuery {
    events {
      slug
      title
      poster {
        url
      }
      artist {
        ... on Artist {
          id
          name
          mainPhoto {
            url
          }
        }
      }
    }
  }
  `;  

  export const EVENT_DETAILS = gql `
query EventDQuery ($slug: String){
    event(where: {slug: $slug}) {
      date
      locationTitle
      parking
      poster {
        url
      }
      eventDetails {
        text
      }
      slug
      ticketsPrice
      title
      artist {
        ... on Artist {
          name
          videoLinks
        }
      }
    }
  }
  `