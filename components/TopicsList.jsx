import React from 'react'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from 'react-icons/hi'
import Link from 'next/link'

const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store'
    })
    if(!res.ok){
      throw new Error('Faild to fetch topics')
    }
    return res.json()
  } catch (error) {
    console.log('Error loading topics: ', error)
  }
}

const TopicsList = async () => {
  const { topics } = await getTopics()
  //console.log('topics: ', topics)
  return (
    <>
      {topics.map( (t) => (
        <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5  items-start'>
          <div>
            <h2 className='font-bold text-2xl'>{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className='flex gap-2'>
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}><HiPencilAlt size={24} /></Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default TopicsList