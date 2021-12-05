import { Toast } from "react-hot-toast/dist/core/types"
import { Author } from "../../../@types"

type SuccessCommentToastProps = {
  item: Toast
  onClose: () => void
  author: Author
}

export default function SuccessCommentToast({ item, onClose, author }: SuccessCommentToastProps) {
  return (
    <div
      className={`${
        item.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src={author.avatar.url}
              alt={author.name}
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">
              {author.name}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Thank you for comment my article!
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={onClose}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  )
}
