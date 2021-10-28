import { gql } from "@apollo/client"

export const getAllMessages = gql`
query getAllMessags{
    
        contentCards(filter: {limit: 20, keywords: "", types: [PODCAST]}) {
        edges {
        ... on Podcast {
        name
        image {
        ...Image
        }
        categories {
        ...Category
        }
        experts {
        ...Expert
        }
        }
        }
        }

        fragment Image on Image {
            uri
           }
           fragment Category on Category {
            name
           }
           fragment Expert on Expert {
            firstName
            lastName
            title
            company
           }
           
       

}
`