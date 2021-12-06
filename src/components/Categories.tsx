import { gql, useQuery } from "@apollo/client"
import { Categorie } from "../../@types"
import Link from 'next/link'
import { GET_CATEGORIES } from "../graphql/queries"

export function Categories() {
  const categories = useQuery(GET_CATEGORIES)

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.data?.categories.map((category: Categorie, index: number) => (
        <Link key={index} href={`/category/${category.slug}`} passHref>
          <span className={`cursor-pointer block ${(index === categories.data?.categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

