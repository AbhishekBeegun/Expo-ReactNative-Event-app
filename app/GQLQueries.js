import { gql } from "@apollo/client";

export const ARTIST_QUERY = gql`
query MyQuery {
    artists (first:5){
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
export const ALLARTIST_QUERY = gql`
query MyQuery {
    artists (first:20){
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
        id
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
    events (first:3) {
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
   
  export const ALLEVENT_QUERY = gql`
  query EventQuery {
    events (first:5) {
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
      location {
        latitude
        longitude
      }
      parking
      poster {
        url
      }
      eventdescription
      slug
      title
      abovevip
      viptickets
      nmltickets
      artist {
        ... on Artist {
          id
          name
          videoLinks
          mainPhoto {
            url
          }
        }
      }
    }
  }
  `
