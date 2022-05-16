import React from 'react'
import ListItemMembers from './ListItemMembers'

const ListMembers = props => {
  return (
    <div className='12pro:p-0 grid 12pro:grid-cols-3 12pro:gap-x-10 md:grid-cols-4 12pro:justify-items-center'>
{props.showMembers.members.map(member => (
<ListItemMembers
key={member.id}
data={member} />
))}
    </div>
  )
}

export default ListMembers