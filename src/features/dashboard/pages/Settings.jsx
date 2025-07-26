import React from 'react'
import SettingTabs from '../components/settingsTabs/SettingTabs'

const Settings = () => {
  return (
    <div className='bg-white rounded-lg shadow-sm p-5'>
      <h1 className='text-left text-xl font-medium text-black mb-5'>Settings</h1>
     <SettingTabs />
    </div>
  )
}

export default Settings
