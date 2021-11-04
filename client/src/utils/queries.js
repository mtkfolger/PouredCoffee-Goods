import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
    query products {
        Product {
            name
            description
            price
            roast
            image
        }
    }
`;

