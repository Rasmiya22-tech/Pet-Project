
import React from 'react'
import { Link } from 'react-router-dom';

import { Button } from './ui/button';
import { UserButton, useUser } from '@clerk/clerk-react';



function Header() {

  const { user, isSignedIn } = useUser();

  // console.log(user);
  return (
    <div className='flex justify-between items-center shadow-sm p-5 to-blue-500' >
      <img src='/logo.svg' width={150} height={100} />
      <ul className='hidden md:flex gap-16'>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
      </ul>


      {isSignedIn ?
        (<div>
          <UserButton />
          <Link to={'/profile'}>
            <Button>Submit Listing </Button>
          </Link>
        </div>)
        :
        (<Link to={'/profile'}>
          <Button>Submit Listing </Button>
        </Link>)
      }

    </div>
  )
}

export default Header