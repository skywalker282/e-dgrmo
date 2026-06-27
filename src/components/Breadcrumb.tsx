import React from 'react'
import Link from 'next/link'

type BreadcrumbItem = {
  name: string
  href?: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
            {item.href ? (
              <Link 
                href={item.href} 
                className="text-gray-500 hover:text-primary-blue"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-primary-blue font-medium">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb