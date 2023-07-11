import { graphql } from "../generated";

export const FETCH_CHARACTERS = graphql(`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
          residents {
            id
            name
            status
            species
            type
            gender
          }
          created
        }
        location {
          id
          name
          type
          dimension
          residents {
            id
            name
            status
            species
            type
            gender
          }
          created
        }
        image
        episode {
          id
          name
          air_date
          episode
          characters {
            id
            name
            status
            species
            type
            gender
          }
          created
        }
      }
    }
  }
`);
