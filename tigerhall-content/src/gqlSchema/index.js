import {gql} from "@apollo/client"

export  const getAllMessages = gql `
query getAllMessags{
    getAllMessags{
    message
    id
    }
}
`