export type BlogPost = {
  node: {
    id: string
    title: string
    exerpt: string
    slug: string  
    banner: {
      url: string
    }
  }
}