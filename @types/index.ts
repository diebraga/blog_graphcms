export type BlogPost = {
  node: {
    id: string
    title: string
    exerpt: string
    slug: string  
    author: Author
    createdAt: string
    content: {
      html: string
    }
    banner: {
      url: string
    }
    categories: Categorie[]
  }
}

export type Author = {
  name: string
  avatar: {
    url: string
  }
  id: string
  bio: string
}

export type Categorie = {
  name: string
  slug: string
  id: string
}

export type Comment = {
  name: string
  content: string
  createdAt: string
  id: string
  email: string
}