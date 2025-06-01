import React from 'react'
import Image from 'next/image'

const Agent = () => {
    const isSpeaking = true; // This can be a prop or state to control the speaking status
  return (
    <>
        <div className="call-view">
        {/* AI Interviewer Card */}
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="profile-image"
              width={35}
              height={24}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>
      </div>
              {/* User Profile Card */}
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="profile-image"
              width={579}
              height={539}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>John Doe</h3>
          </div>
        </div>
    </>
  )
}

export default Agent