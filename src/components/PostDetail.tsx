import moment from "moment"
import { IoMdCalendar } from "react-icons/io"
import { BlogPost } from "../../@types"

type PostDetailProps = {
  post: BlogPost['node']
}
export function PostDetail({ post }: PostDetailProps) {
  console.log(post.content.html)
  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'> 
      <div className="relative overflow-hidden shadow-md mb-6">
        <img src={post.banner.url} alt={post.title} className="object-top h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full justify-between">
          <div className='flex'>
            <img
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
              src={post.author.avatar.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
          </div>
          <div className="font-medium text-gray-700">
            <IoMdCalendar className="h-6 w-6 inline mr-2 text-gray-700"/>
            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.html }}/>
      </div>
    </div>
  )
}
