import { gql } from "@apollo/client";
import { apolloClient } from "../lib/apolloClient";

export async function GetPosts() {
  const getPosts = await apolloClient.query({
    query: gql`
    query GetPosts {
      postsConnection(orderBy: createdAt_DESC) {
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
    posts(orderBy: createdAt_DESC, last: 3) {
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

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      slug
    }
  }
`

export const GET_POST_COMMENTS = gql`
  query GetPostComments($slug: String!) {
    comments(where: {post: {slug: $slug}}) {
      id
      name
      email
      content
      createdAt
    }
  }
`

export const GET_FEATURED_POSTS = gql`
  query GetFeaturedPosts {
    posts(where: {isFeatured: true}) {
      author {
        name
        avatar {
          url
        }
      }
      banner {
        url
      }
      title
      slug
      createdAt
    }
  }
`


export async function getCategories() {
  const GetCategories = await apolloClient.query({
    query: gql`
      query {
        categories {
          id
          name
          slug
        }
      }
    `
  })
  return GetCategories.data
}

export const QUERY_POSTS_BY_CATEGORY = gql`
  query QueryPostsByCategory($slug: String!) {
    postsConnection(where: {
      categories_some: {slug: $slug}}
      orderBy: createdAt_DESC
      ) {
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

export const getCategoryPost = async (slug: string) => {
  const GetCategories = await apolloClient.query({
    query: gql`
    `,
    variables: {
      slug: slug
    }    
  })

  return GetCategories.data;
};
