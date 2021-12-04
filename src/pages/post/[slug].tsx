import { Author } from "../../components/Author";
import { Categories } from "../../components/Categories";
import Comments from "../../components/Comments";
import { CommentsForm } from "../../components/CommentsForm";
import { PostWidget } from "../../components/PostWidget";
import { PostDetail } from "../../components/PostDetail";

export default function PostDetailPage() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail />
          <Author />
          {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
          <CommentsForm />
          <Comments />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
