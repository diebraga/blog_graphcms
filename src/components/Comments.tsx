import { useQuery } from "@apollo/client";
import moment from "moment";
import { Comment } from "../../@types";
import { GET_POST_COMMENTS } from "../graphql/queries";
import parse from 'html-react-parser';

type CommentsProps = {
  slug: string
}

export default function Comments({ slug }: CommentsProps) {
  const { loading, error, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug }
  });

  return (
    <>
      {loading && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <div className=" flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        </div>
      )}
      {data?.comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {data?.comments.length === 1 ? `${data?.comments.length} Comment` : `${data?.comments.length} Comments`}
          </h3>
            {data?.comments.map((comment: Comment, index: number) => (
              <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                <div className="mb-4 flex justify-between">
                  <div>
                    <p className="font-semibold">{comment.name}</p>
                    <p className="font-light text-sm text-gray-600">{comment.email}</p>
                  </div>
                  {moment(comment.createdAt).format('DD MMMM, YYYY')}
                </div>
                <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.content)}</p>
              </div>
            ))}
        </div>
      )}
    </>
  )
}
