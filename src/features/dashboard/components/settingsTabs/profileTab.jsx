import React from 'react'
import profileImage from '../../../../assets/icons/profile-pc.png'
import { Button } from 'antd'
import { useAuth } from '../../../auth/AuthContext';

const ProfileTab = () => {
     const { logout } = useAuth();
    return (
        <div className='px-6 py-7 bg-white border border-[#f2f2f2] rounded-2xl'>
            <div className="img flex items-start justify-between py-5">
                <div className="profile-image w-[90px] h-[90px] object-cover rounded-full bg-[#FDCFC1]">
                    <img src={profileImage} alt="Image" className='w-[90px] h-[90px] object-cover' />
                </div>
                <div className="buton-box bg-orange-gradient hover:bg-orange-gradient-hover p-[1px] rounded-lg w-fit">
                    <Button
                        type="ghost"
                        onClick={''}
                        className="group bg-[#fff] hover:bg-orange-gradient-hover text-base font-normal leading-4 py-[10px] px-8 w-fit h-auto hover:text-white animate-none transition-none " // Tailwind for styling
                    >
                        <span className='bg-orange-gradient bg-clip-text text-transparent group-hover:text-white'>Edit Profile</span>
                    </Button>
                </div>
            </div>
            <div className="info py-5 border-t border-[#f2f2f2]">
                <h4 className='text-left text-base font-medium text-black mb-3'>Name</h4>
                <p className='text-left text-sm font-normal text-[#040303] mb-0'>Rajdeep Sarkar</p>
            </div>
            <div className="info py-5 border-t border-[#f2f2f2]">
                <h4 className='text-left text-base font-medium text-black mb-3'>Email</h4>
                <p className='text-left text-sm font-normal text-[#040303] mb-0'>example@test.com</p>
            </div>
            <div className="info py-5 border-t border-[#f2f2f2]">
                <h4 className='text-left text-base font-medium text-black mb-3'>Mobile Number</h4>
                <p className='text-left text-sm font-normal text-[#040303] mb-0'>1234833211</p>
            </div>
            <div className="buttons py-5 border-t border-[#f2f2f2] flex items-center gap-8">
                <a onClick={logout} className="text-base bg-orange-gradient bg-clip-text text-transparent hover:bg-orange-gradient-hover hover:bg-clip-text hover:text-transparent font-medium">
                    Logout
                </a>
                <a className="text-base bg-orange-gradient bg-clip-text text-transparent hover:bg-orange-gradient-hover hover:bg-clip-text hover:text-transparent font-medium">
                    Delete account
                </a>

            </div>
        </div>
    )
}

export default ProfileTab
