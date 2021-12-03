import { BlogPost } from "../../@types"

type PostCardProps = {
  post: BlogPost
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div>
      {post.title}
      {post.exerpt}
    </div>
  )
}
