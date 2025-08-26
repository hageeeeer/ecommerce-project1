import { getSingleProduct } from '@/apis/getSingleProduct.api'
import { productInterface } from '@/interfaces/products.interface'
import Image from 'next/image'
import React from 'react'
import ProductItemBtn from '../_compoenents/ProductItemBtn'

export default async function Page({params}: { params: Promise<{ id: string }>}) {
  const { id } = await params
  const data = await getSingleProduct(id) as productInterface

  if (!data) {
    return <div>Product not found</div>
  }
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
      <div className="w-full md:w-1/3">
        <Image
          src={data.imageCover}
          alt={data.title}
          width={300}
          height={300}
          className="w-full"
        />
      </div>
      <div className="w-full md:w-2/3 p-4">
        <p className="text-main">{data.category.name}</p>
        <p className="line-clamp-1">{data.title}</p>
        <p className="text-gray-500">{data.description}</p>
        <div className="flex items-center justify-between my-5">
          <span>{data.price} EGP</span>
          <span>
            {data.ratingsAverage}
            <i className="fa-solid fa-star text-rating"></i>
          </span>
        </div>
        <ProductItemBtn id={data._id} />
      </div>
    </div>
  )
}
