import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Categories } from '../components/Categories';
import { PostCard } from '../components/PostCard';
import { PostWidget } from '../components/PostWidget';
import { gql } from '@apollo/client';
import { apolloClient } from '../lib/apolloClient';
import { BlogPost } from '../../@types';
import { GetPosts } from '../graphql/queries';

type BlogPostsProps = {
  blogPosts: BlogPost[]
}

const Home = ({ blogPosts }: BlogPostsProps) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Little Blog</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {blogPosts.map((post, index) => {
            return (
                <PostCard key={index} post={post.node}/>
              )} 
            )}
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => { 
  const data = await GetPosts()
  return {
    props: {
      blogPosts: data.postsConnection.edges
    },
  };
};
