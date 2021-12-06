import { GetServerSideProps, GetStaticProps } from 'next';
import { QUERY_POSTS_BY_CATEGORY } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { PostCard } from '../../components/PostCard';
import { BlogPost } from '../../../@types';
import { Categories } from '../../components/Categories';
import { Loader } from '../../components/Loader';

type CategoryPostProps = {
  slug: string
}

type QueryTypes = {
  postsConnection: {
    edges: BlogPost[]
  }
}

export default function CategoryPost({ slug }: CategoryPostProps) {
  const { loading, error, data } = useQuery<QueryTypes, CategoryPostProps>(QUERY_POSTS_BY_CATEGORY, {
    variables: { slug }
  });

  if (loading || !data) return <Loader />
  
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {data && data.postsConnection.edges.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query

  return {
    props: {
      slug
    },
  };
};
