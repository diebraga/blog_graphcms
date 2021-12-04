import { Author } from "../../components/Author";
import { Categories } from "../../components/Categories";
import Comments from "../../components/Comments";
import { CommentsForm } from "../../components/CommentsForm";
import { PostWidget } from "../../components/PostWidget";
import { PostDetail } from "../../components/PostDetail";
import { GetStaticPaths, GetStaticProps } from "next";
import { GetPostDetail, GetPosts } from "../../graphql/queries";
import { BlogPost } from "../../../@types";

type PostDetailPageProps = {
  blogPost: BlogPost['node']
}

export default function PostDetailPage({ blogPost }: PostDetailPageProps) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={blogPost}/>
          <Author author={blogPost.author}/>
          {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
          {/* <CommentsForm slug={blogPost.slug}/> */}
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

type getStaticPathsProps = {
  node: {
    slug: string
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => { 
  const data = await GetPostDetail(String(params?.slug))
  return {
    props: {
      blogPost: data.post
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => { 
  const data = await GetPosts()
  return {
    paths: data.postsConnection.edges.map(({ node: { slug }}: getStaticPathsProps) => ({ params: { slug } })),
    fallback: false
  };
};

