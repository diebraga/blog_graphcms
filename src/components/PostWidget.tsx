import Link from 'next/link'
import moment from "moment";
import { gql, useQuery } from '@apollo/client';
import { BlogPost, Categorie } from '../../@types';
import { getRecentPosts, getSimilarPosts } from '../graphql/queries';

type PostWidgetProps = {
  category?: Categorie
  slug?: string
}

export function PostWidget({ category, slug }: PostWidgetProps) {
  const recentPosts = useQuery(getRecentPosts)
  const similarPosts = useQuery(getSimilarPosts)

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {recentPosts.data?.posts.map((post: BlogPost['node'], index: number) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={post.banner.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs text-sm">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

