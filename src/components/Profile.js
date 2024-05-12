import React, { useEffect,useState } from 'react'
import ProfilePic from './ProfilePic'
import ProfileDetails from './ProfileDetails'
import { PROFILE_DETAILS_API } from '../utils/constants'
import Shimmer from './Shimmer'

const Profile = () => {

  const [userCount, setUserCount]= useState(0);
  const [profileData, setProfileData] = useState([]);
  

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async()=>{
    const data = await fetch(PROFILE_DETAILS_API);
    const json= await data.json();
    console.log(json.results);
    setUserCount(userCount+1);
    setProfileData(json.results);
  }

  console.log(profileData);

  return userCount === 0 ? (<Shimmer/>)
: (<div className='max-sm:bg-green-50 max-sm:w-[70%] h-[40%] w-[60%] lg:w-[40%] xl:w-[38%] flex rounded-sm shadow-xl max-sm:flex-col  hover:scale-105 text-[#5ebec4] hover:text-[rgb(96,230,250)]' >
   <ProfilePic profileData={profileData} />
   <ProfileDetails profileData={profileData}/>
   </div>
  )
}

export default Profile
