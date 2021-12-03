import Link from 'next/link'

export default function Header() {
  const categories = [
    {name: 'name', slug: 'name'}
  ]
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
          {categories.map((categorie, index) => {
            return (
              <Link key={categorie.slug} href={`/category/${categorie.slug}`}>
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                  {categorie.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
