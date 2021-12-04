import Link from 'next/link'

type PostCardProps = {
  post: {
    id: string
    title: string
    exerpt: string
    slug: string  
    banner: {
      url: string
    }
  }
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img 
          src={post.banner.url} 
          className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
          alt={post.title} />
      </div>
      <h1 className='transform duration-700 text-center mb-8 cursor-pointer hover:text-blue-600 text-3xl font-semibold'>
        <Link href={`/post/${post.slug}`} passHref>
          {post.title}
        </Link>
      </h1>
    </div>
  )
}
