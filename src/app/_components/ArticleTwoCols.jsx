import React from 'react'

const ArticleTwoCols = ({component: Component, custCss}) => {
  return (
    <article  className={`grid items-center min-h-screen grid-cols-1 px-10 py-6 xl:grid-cols-2 ${custCss}`}>
        <Component />
    </article>
  )
}

export default ArticleTwoCols