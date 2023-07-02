
function UserStatus({ title, value }) {
  return (
   <div className='text-center lg:text-left'>
      <h3 className='text-3xl text-primary font-semibold'>{value}</h3>
      <p>{title}</p>
   </div>
  )
}

export default UserStatus