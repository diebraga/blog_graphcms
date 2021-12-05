import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import { ADD_COMMENT } from "../graphql/mutations";
import { useLocalStorage } from "../utils/useLocalStorage";

type CommentsFormProps = {
  slug: string
}

type OnSubmitData = {
  content: string
  name: string
  email: string
}

export function CommentsForm({ slug }: CommentsFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [addComment, { data, loading, error }] = useMutation(ADD_COMMENT);

  const storeData = useRef(null)

  const [savedName, setName] = useLocalStorage('name', '') 
  const [savedEmail, setEmail] = useLocalStorage('email', '') 

  
  const onSubmit: SubmitHandler<OnSubmitData> = async (formData) => {    
    console.log(formData)
    addComment({
      variables: {
        name: formData.name,
        email: formData.email,
        content: formData.content,
        slug: slug
      }
    })
    // @ts-ignore
    if (storeData.current?.checked) {
      setName(formData.name)
      setEmail(formData.email)
    } else {
      setName('')
      setEmail('')
    }
  }
  console.log(loading)
  console.log(data)
  console.log(error)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea 
          {...register("content", { required: 'Comment field required' })} 
          className="p-4 outline-none w-full rounded-lg h-40 focus:ring bg-gray-100 text-gray-700 focus:border-blue-500" 
          name="content" 
          placeholder="Comment" 
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          {...register("name", { required: 'Name field required' })} 
          type="text"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring bg-gray-100 text-gray-700 focus:border-blue-500"
          placeholder="Name"
          name="name" 
          defaultValue={savedName}
        />
        <input
          {...register("email", { 
            required: 'Email field required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }      
          })} 
          type="email"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring bg-gray-100 text-gray-700 focus:border-blue-500"
          placeholder="Email"
          name="email" 
          defaultValue={savedEmail}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input type="checkbox" ref={storeData} id="storeData" name="storeData" value="true" defaultChecked />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {errors.comment && <p className="text-xs text-red-500 mb-1">{errors.comment.message}!</p>}
      {errors.name && <p className="text-xs text-red-500 mb-1">{errors.name.message}!</p>}
      {errors.email && <p className="text-xs text-red-500 mb-1">{errors.email.message}!</p>}
      <div className="mt-8">
        <button type="submit" className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-900 text-lg font-bold rounded-md text-white px-8 py-3 cursor-pointer">Post Comment</button>
      </div>
    </form>
  )
}
