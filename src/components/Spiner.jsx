import { Image, Spin } from 'antd'
import React from 'react'
import Logo from '../assets/icons/Logo.svg'

const LoaderSpiner = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <Image
        preview={false}
        className='max-w-[220px] h-[45px] object-contain mb-7'
        src={Logo}
      />
      <Spin size="large" />
    </div>
  )
}
export default LoaderSpiner
