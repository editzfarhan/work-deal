import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-yellow-100 circle-xl p-8 md:p-0 dark:bg-yellow-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:circle-none circle-full mx-auto" src="/f.JPG" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          Tailwind CSS is the only framework that I have seen scale
          on large teams. It is easy to customize, adapts to any design,
          and the build size is tiny.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Farhan Ali
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Freelancer, GKFC
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}
export default page