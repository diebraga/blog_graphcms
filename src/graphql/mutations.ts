import { gql } from "@apollo/client";


// export const ADD_COMMENT = gql`
// mutation MyMutation($name: String!, $email: String!, $content: String!, $slug: String!) {
//   __typename
//   createComment(name: $name, email: $email, content: $content, slug: $slug) {
//       id
//       name
//       email
//       post: {connect: {slug}}
//     }
//   }
// `;

export const ADD_COMMENT = gql`
    mutation createComment($name: String!, $email: String!, $content: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, content: $content, post: {connect: {slug: $slug}}}) { id }
    }
`;