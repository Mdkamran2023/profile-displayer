import React from 'react'

const ProfileDetails = ({profileData}) => {

  console.log(profileData[0]);
  const {name,gender,phone}=profileData[0];
  
  return (
    <div className='mt-7 ml-2 max-sm:mx-auto'>
      <div className='inline-block'>
      <h3 className=' xl:text-5xl lg:text-4xl md:text-3xl text-2xl inline-block pr-3 text-sky-500'>{`${name.first}`}</h3>
      <h3 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl inline-block text-sky-500'>{`${name.last}`}</h3>
      </div>
      <h3 className='md:text-2xl text-xl'>{`${gender.charAt(0).toUpperCase()+gender.slice(1)}`}</h3>
      <h3 className='md:text-2xl text-xl max-sm:mb-2'>{`${phone}`}</h3>
    </div>

  )
}

export default ProfileDetails


