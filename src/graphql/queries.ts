import { gql } from "@apollo/client";
import { apolloClient } from "../lib/apolloClient";

export async function GetPosts() {
  const getPosts = await apolloClient.query({
    query: gql`
    query GetPosts {
      postsConnection {
        edges {
          node {
            author {
              id
              name
              bio
              avatar {
                url
              }
            }
            createdAt
            id
            title
            slug
            exerpt
            banner {
              url
            }
            categories {
              id
              name
              slug
            }
          }
        }
      }
    }
    `
  })

  return getPosts.data
}

export async function GetPostDetail(slug: string) {
  const getPost = await apolloClient.query({
    query: gql`
    query GetPost($slug: String) {
      post(where: {slug: $slug}) {
        id
        title
        exerpt
        banner {
          url
        }
        author {
          id
          name
          bio
          avatar {
            url
          }
        }
        createdAt
        slug
        content {
          html
        }
      }
      categories {
        id
        name
        slug
      }
    } 
    `, 
    variables: {
      slug: slug
    }
  })

  return getPost.data
}

export const getRecentPosts = gql`
  query GetRecentPosts {
    posts(orderBy: createdAt_ASC, last: 3) {
      id
      title
      slug
      createdAt
      banner {
        url
      }
    }
  }
`

export const getSimilarPosts = gql`
  query GetPostDetails($slug: String!, $categories: [String!]) {
    posts(
      where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
      last: 3
    ) {
      title
      banner {
        url
      }
      createdAt
      slug
    }
  }
`

export const getCategories = gql`
  query GetCategories {
    categories {
      id
      name
      slug
    }
  }
`


