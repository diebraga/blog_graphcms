import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { Categorie } from '../../@types'
import { getCategories } from '../graphql/queries'

export default function Header() {
  const categories = useQuery(getCategories)

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-gray-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/' passHref>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              Little Blog
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.data?.categories.map((category: Categorie, index: number) => {
            return (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                  {category.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

