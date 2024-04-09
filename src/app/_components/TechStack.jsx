import React from 'react'

const TechStack = () => {

    const currentStack = [
        {
            name: "JavaScript",
            score: "9"
        },
        {
            name: "TypeScript",
            score: "9"
        },
        {
            name: "Node.js",
            score: "8"
        },
        {
            name: "HTML/CSS",
            score: "10"
        },
        {
            name: "React",
            score: "8"
        },
        {
            name: "Next.js",
            score: "10"
        },
        {
            name: "WordPress",
            score: "8"
        },
        {
            name: "Php",
            score: "10"
        },
        {
            name: "Adobe PS, AI, ID",
            score: "10"
        },

    ]

  return (
    <div className='space-y-2'>
    {currentStack.map((item, index) => (
    <div key={index} className='w-full h-10 rounded-full dark:bg-custYellow'>
        <div className='flex items-center w-1/2 h-full pl-5 rounded-full dark:bg-custTurq'>
        <p>{item.name}</p>
        </div>
    </div>
    ))}
    </div>
  )
}

export default TechStack