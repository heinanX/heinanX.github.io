import React from 'react'

const ArticleTwoCols = ({component: Component}) => {
  return (
    <article  className="grid items-center max-w-screen-xl min-h-screen grid-cols-1 px-10 py-6 xl:grid-cols-2">
        <Component />
    </article>
  )
}

export default ArticleTwoCols