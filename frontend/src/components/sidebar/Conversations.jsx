import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className='py-2 flex gap-2 flex-col flex-1 overflow-x-hidden overflow-y-auto'>
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  )
}

export default Conversations
