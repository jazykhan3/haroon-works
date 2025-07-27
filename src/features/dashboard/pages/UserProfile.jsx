import { Progress } from "antd";
import StreakIcon from "../../../assets/svgs/user-streak.svg";
import userProfile from "../../../assets/images/profiler-picture.png";
import pointsEarned from "../../../assets/svgs/points-earned.svg";
import StreakOverview from "../components/StreakOverview";

function UserProfile(props) {
  // Mock data - replace with actual user data
  const userData = {
    name: "Sophia Clark",
    mobile: "+1-555-123-4567",
    pointsEarned: 2249,
    examType: "CA Final",
    nextAttempt: "May 2024",
    currentStreak: 4,
  };

  return (
    <div>
      <div className="bg-white rounded-xl p-6 font-inter">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Your Profile</h2>
          <button className="px-6 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-50 transition-colors font-bold">
            Edit Profile
          </button>
        </div>

        <div className="flex flex-wrap flex-col md:flex-col lg:flex-row gap-6">
          {/* Left section with user details */}
          <div className="flex-1 border-2 border-gray-200 rounded-2xl p-6">
            <div className="mb-6">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-4 text-left">
                DETAILS
              </p>

              {/* User info */}
              <div className="flex items-center gap-4 mb-6 font-inter">
                <div className="w-24 h-24">
                  <img src={userProfile} alt="User Profile" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 text-left">
                    {userData.name}
                  </h3>
                  <p className="text-orange-500 text-sm font-inter">
                    Mobile: {userData.mobile}
                  </p>
                </div>
              </div>

              {/* Stats grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Points Earned */}
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <img src={pointsEarned} alt="Points Earned" />
                    <span className="text-sm text-gray-600">Points Earned</span>
                  </div>
                  <p className="text-2xl font-semibold text-gray-900 text-left mt-2">
                    {userData.pointsEarned.toLocaleString()} PTS
                  </p>
                </div>

                {/* Exam Type */}
                <div className="rounded-lg p-4 border-gray-200 border">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Exam Type</span>
                  </div>
                  <p className="text-2xl font-semibold text-gray-900 text-left mt-2">
                    {userData.examType}
                  </p>
                </div>

                {/* Next Attempt */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Next Attempt</span>
                  </div>
                  <p className="text-2xl font-semibold text-gray-900 text-left mt-2">
                    {userData.nextAttempt}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right section with streak */}
          <div className="flex flex-col border-2 border-gray-200 rounded-2xl p-6 w-full lg:w-[20%]">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-4 text-left">
              CURRENT STREAK
            </p>

            {/* Circular progress with streak icon */}

            <div className="relative mb-2 flex items-center justify-center mt-4">
              <Progress
                type="circle"
                percent={75}
                size={
                  window.innerWidth < 768
                    ? 160
                    : window.innerWidth < 1024
                    ? 200
                    : 230
                }
                strokeColor={{
                  "0%": "#FF5B28",
                  "100%": "#F2CB27",
                }}
                strokeWidth={8}
                showInfo={false}
                className="custom-progress"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <img
                  src={StreakIcon}
                  alt="Streak"
                  className="w-[90px] h-[90px] mb-2"
                />
                <p className="text-lg font-semibold text-gray-800 leading-none">
                  {userData.currentStreak} Days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StreakOverview />
    </div>
  );
}

export default UserProfile;
