//file to set up queries to make to our graphql server

import { gql } from "urql";

// GET_CHARACTERS
// gql is required in order for react to interpret our graphql queries
export const GET_CHARACTERS = gql`
    query getCharacters {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`

export const GET_CHARACTER = gql`
    query getCharacterByID($id: ID!)
    {
        character(id: $id) {
            id
            name
            image

    }}
`

