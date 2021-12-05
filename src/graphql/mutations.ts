import { gql } from "@apollo/client";

export const PUBLISH_COMMENT = gql`
    mutation PublishComment($id: ID!) {
      publishComment(where: {id: $id}, to: PUBLISHED) {
        content
        name
        email
        id
      }
    }
`;

export const ADD_COMMENT = gql`
    mutation createComment($name: String!, $email: String!, $content: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, content: $content, post: {connect: {slug: $slug}}}) { id }
    }
`;