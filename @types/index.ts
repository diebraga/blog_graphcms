export type BlogPost = {
  node: {
    id: string
    title: string
    exerpt: string
    slug: string  
    author: Author
    createdAt: string
    banner: {
      url: string
    }
  }
}

export type Author = {
  name: string
  avatar: {
    url: string
  }
  id: string
}