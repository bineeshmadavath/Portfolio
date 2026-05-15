
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import heroImage from '../../Thumbnail-Greeneye.png';

function LowFiCarousel() {
  const images = [
    "/phone-screens/Home.jpg",
    "/phone-screens/Camera.png",
    "/phone-screens/comment.png",
    "/phone-screens/congrats.png",
    "/phone-screens/location.png",
    "/phone-screens/low-fidility-with-connections.png",
    "/phone-screens/report.png",
    "/phone-screens/selectType.png",
    "/phone-screens/speakup.png",
    "/phone-screens/summary.png",
    "/phone-screens/UserInfo.png"
  ];
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-[320px] h-[650px] flex items-center justify-center">
        {/* iPhone frame */}
        <img
          src="/phone-screens/iphone.png"
          alt="iPhone 17 Frame"
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        />
        {/* Carousel image inside the phone */}
        <img
          src={images[index]}
          alt={`Prototype ${index + 1}`}
          className="absolute left-[32px] top-[70px] w-[256px] h-[510px] object-contain rounded-xl z-0 bg-white"
        />
      </div>
      <div className="flex gap-4 mt-2">
        <button
          onClick={prev}
          className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold shadow hover:bg-green-200"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold shadow hover:bg-green-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function GreenEye() {
  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 bg-white rounded-[20px]">
      {/* Header / Back Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-green-700 transition-colors group"
        >
          <iconify-icon icon="solar:arrow-left-linear" width="18" height="18" className="group-hover:-translate-x-1 transition-transform"></iconify-icon>
          Back to Work
        </Link>
      </div>
  
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="inline-block px-3 py-1 bg-green-50 text-green-700 font-semibold text-xs tracking-wider uppercase rounded-full mb-6">
            UX Case Study
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-[1.1] tracking-tight">
            Green Eye<br />
            Civic Engagement Platform
          </h1>
          <p className="text-lg lg:text-xl text-neutral-500 max-w-xl">
            Empowering citizens to report littering, track environmental activities, and access educational resources for a cleaner community.
          </p>
        </div>
        {/* Hero Mockup */}
        <div className="flex-1 w-full relative">
          <div className="bg-neutral-100 rounded-2xl border border-neutral-200 shadow-sm relative overflow-hidden group aspect-[16/9]">
            <img
              src={heroImage}
              alt="Green Eye Platform Mockup"
              className="w-full h-full object-cover block scale-110 transition-transform duration-700 group-hover:scale-[1.21]"
            />
          </div>
        </div>
      </div>

      {/* Project Meta — full-width single column below hero image */}
      <div className="max-w-6xl mx-auto px-6 pb-12 border-b border-neutral-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 lg:p-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 shrink-0">
              <iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Role</div>
              <div className="text-sm text-neutral-500">UX/Product Designer</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 shrink-0">
              <iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Tools</div>
              <div className="text-sm text-neutral-500">Figma, React</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 shrink-0">
              <iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Timeline</div>
              <div className="text-sm text-neutral-500">4 Weeks</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 shrink-0">
              <iconify-icon icon="solar:devices-linear" width="20"></iconify-icon>
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Project Type</div>
              <div className="text-sm text-neutral-500">Civic Tech / Sustainability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 flex flex-col gap-[50px]">
        {/* Project Overview */}
        <div>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>01</span> PROJECT OVERVIEW
          </h2>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            Green Eye is a community-driven web application designed to empower citizens to report littering, track environmental activities, and access educational resources. The platform aims to foster civic engagement, reward positive actions, and support local environmental initiatives.
          </p>
        </div>
        {/* User Research */}
        <div>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>02</span> USER RESEARCH INSIGHTS
          </h2>
          {/* User Research Insights Section */}
          <div className="bg-green-50 rounded-2xl p-6 mb-10">
            <div className="flex flex-col gap-10">
              {/* Sarah */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img src="/avathars/lady.png" alt="Sarah" className="w-20 h-20 rounded-full border-4 border-cyan-400 object-cover shadow-md" />
                <div className="relative bg-white rounded-2xl shadow p-5 ml-0 sm:ml-4 mb-2 sm:mb-0">
                  <span className="block text-neutral-700 text-base">"I want a clean neighborhood, but I'm too busy for formal volunteering. My biggest issue is not knowing exactly when the trash truck will arrive. I need an app that sends me a quick alert so I don't miss the collection."</span>
                  <span className="absolute left-[-16px] top-8 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white"></span>
                </div>
                <div className="flex flex-col items-center sm:items-start ml-0 sm:ml-2 mt-2 sm:mt-0">
                  <span className="font-bold text-neutral-900">Sarah</span>
                  <span className="text-neutral-500 text-sm">Local Resident</span>
                </div>
              </div>
              {/* David */}
              <div className="flex flex-col sm:flex-row-reverse items-start sm:items-center gap-4 self-end">
                <img src="/avathars/young-man.png" alt="David" className="w-20 h-20 rounded-full border-4 border-green-400 object-cover shadow-md" />
                <div className="relative bg-white rounded-2xl shadow p-5 mr-0 sm:mr-4 mb-2 sm:mb-0">
                  <span className="block text-neutral-700 text-base">"I'm passionate about sustainability, but it's hard to change people's habits when they don't know how to sort waste properly. I want a platform that offers rewards or points to incentivize my neighbors to recycle more consistently."</span>
                  <span className="absolute right-[-16px] top-8 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></span>
                </div>
                <div className="flex flex-col items-center sm:items-end mr-0 sm:mr-2 mt-2 sm:mt-0">
                  <span className="font-bold text-neutral-900">David</span>
                  <span className="text-neutral-500 text-sm">Environmental Volunteer</span>
                </div>
              </div>
              {/* Officer Raj */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img src="/avathars/old-man.png" alt="Officer Raj" className="w-20 h-20 rounded-full border-4 border-blue-400 object-cover shadow-md" />
                <div className="relative bg-white rounded-2xl shadow p-5 ml-0 sm:ml-4 mb-2 sm:mb-0">
                  <span className="block text-neutral-700 text-base">"My priority is efficiency and meeting city mandates, but I'm held back by outdated routes and limited data. I need real-time IoT tracking so I can see which bins are full and redirect my crew instantly to save time and fuel."</span>
                  <span className="absolute left-[-16px] top-8 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white"></span>
                </div>
                <div className="flex flex-col items-center sm:items-start ml-0 sm:ml-2 mt-2 sm:mt-0">
                  <span className="font-bold text-neutral-900">Officer Raj</span>
                  <span className="text-neutral-500 text-sm">Municipal Staff</span>
                </div>
              </div>
            </div>
            {/* Synthesized User Research Insight */}
            <div className="mt-8 bg-green-100 border-l-4 border-green-500 rounded-xl p-5">
              <div className="font-semibold text-green-900 mb-1">User Research Insight</div>
              <div className="text-green-900">
                Residents, volunteers, and municipal staff all desire a cleaner community but face different barriers: uncertainty about waste collection timing, lack of knowledge or motivation for proper recycling, and inefficient operational tools. Users want simple, timely notifications, clear guidance, and incentives to encourage participation, while staff need real-time data to optimize their efforts. A unified platform that addresses these needs can significantly boost engagement and environmental impact.
              </div>
            </div>
          </div>
        </div>

        {/* Pain Points */}
        <div>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>03</span> PAIN POINTS
          </h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-green-100 text-green-900 rounded-full px-6 py-3 font-medium shadow-sm border border-green-200">Lack of awareness about how to report littering</div>
            <div className="bg-green-100 text-green-900 rounded-full px-6 py-3 font-medium shadow-sm border border-green-200">Difficulty tracking personal environmental impact</div>
            <div className="bg-green-100 text-green-900 rounded-full px-6 py-3 font-medium shadow-sm border border-green-200">Limited incentives for community participation</div>
            <div className="bg-green-100 text-green-900 rounded-full px-6 py-3 font-medium shadow-sm border border-green-200">Accessibility barriers for older adults and non-tech-savvy users</div>
          </div>
        </div>
        {/* Persona */}
        <div>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>04</span> PERSONA
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Persona Card */}
              <div className="flex-1 bg-emerald-400 rounded-3xl p-8 text-white shadow-lg flex flex-col items-start">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="/avathars/indian-boy.png"
                    alt="Rahul"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
                  />
                  <div>
                    <div className="text-3xl font-bold">Rahul</div>
                    <div className="text-lg opacity-90">Eco-Activist Student</div>
                  </div>
                </div>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-center gap-3">
                      <span className="text-xl"><iconify-icon icon="solar:user-circle-linear" /></span>
                    <span className="font-medium">Age:</span> <span className="ml-1">16</span>
                  </li>
                    <li className="flex items-center gap-3">
                      <span className="text-xl"><iconify-icon icon="solar:book-linear" /></span>
                      <span className="font-medium">Education:</span> <span className="ml-1">12th Grade</span>
                    </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl"><iconify-icon icon="solar:home-2-linear" /></span>
                    <span className="font-medium">Hometown:</span> <span className="ml-1">Ernakulam</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl"><iconify-icon icon="solar:users-group-rounded-linear" /></span>
                    <span className="font-medium">Family:</span> <span className="ml-1">Father, Mother &amp; Sister</span>
                  </li>
                </ul>
              </div>
              {/* Scenario Card */}
              <div className="flex-1 bg-indigo-50 rounded-3xl p-8 text-neutral-700 shadow">
                Rahul, a 16-year-old student and eco-activist, spots a littered area near his school and quickly reports it through the Green Eye app. He pins the location, uploads photos, and submits the report. A few days later, the spot is cleaned by a local volunteer group, and Rahul receives a reward badge and points in the app for his contribution. Encouraged by the recognition, he organizes a clean-up drive through the app, drawing in friends and neighbors—proving that small actions can spark big change.
              </div>
            </div>
            {/* Goals and Frustrations */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 bg-green-50 rounded-2xl p-6 flex items-start gap-4 shadow">
                <span className="text-3xl text-green-600 mt-1"><iconify-icon icon="solar:flag-linear" /></span>
                <div>
                  <div className="font-bold text-lg text-green-900 mb-1">Goals</div>
                  <div className="text-green-900 opacity-80">
                    Rahul aims to empower citizens to report waste, raise awareness, encourage community clean-ups, and support efficient tracking and impact visibility through the app.
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-yellow-50 rounded-2xl p-6 flex items-start gap-4 shadow">
                <span className="text-3xl text-yellow-500 mt-1"><iconify-icon icon="solar:sad-square-linear" /></span>
                <div>
                  <div className="font-bold text-lg text-yellow-900 mb-1">Frustrations</div>
                  <div className="text-yellow-900 opacity-80">
                    Rahul wants to avoid complex reporting processes, lack of feedback, low public engagement, and the feeling that his efforts have no real impact.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Journey Map */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
          <span>05</span> USER JOURNEY MAP
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 rounded-xl text-sm">
            <thead>
              <tr className="bg-emerald-400 text-white">
                <th className="px-6 py-4 text-left rounded-tl-2xl">ACTION</th>
                <th className="px-6 py-4 text-left">TASK LIST</th>
                <th className="px-6 py-4 text-left">FEELING</th>
                <th className="px-6 py-4 text-left rounded-tr-2xl">OPPORTUNITY</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b">
                <td className="px-6 py-5 font-medium">Awareness & Discovery</td>
                <td className="px-6 py-5">User discovers the app via social media or ads and downloads it from the store.</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 font-semibold text-orange-500 shadow-sm">
                    <span className="text-lg">🥸</span> Intrigued
                  </span>
                </td>
                <td className="px-6 py-5">Use targeted ads and environmental partnerships to boost reach.</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-5 font-medium">Onboarding</td>
                <td className="px-6 py-5">User signs up or logs in and completes a brief introductory tutorial.</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 font-semibold text-orange-500 shadow-sm">
                    <span className="text-lg">😊</span> Engaged
                  </span>
                </td>
                <td className="px-6 py-5">Simplify the signup flow to reduce user friction.</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-5 font-medium">Exploring</td>
                <td className="px-6 py-5">User navigates the app to understand how to report waste and locate nearby issues.</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 font-semibold text-orange-500 shadow-sm">
                    <span className="text-lg">🤔</span> Curious
                  </span>
                </td>
                <td className="px-6 py-5">Provide better guidance to ensure users understand all features.</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-5 font-medium">Identifying Waste</td>
                <td className="px-6 py-5">User spots waste in public and uses the app's location feature to pinpoint the spot.</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 font-semibold text-orange-500 shadow-sm">
                    <span className="text-lg">😟</span> Concerned
                  </span>
                </td>
                <td className="px-6 py-5">Use AR or precise geotagging for more accurate waste location.</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-5 font-medium">Reporting</td>
                <td className="px-6 py-5">User uploads a photo, selects the waste type, adds details, and submits the report.</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 font-semibold text-orange-500 shadow-sm">
                    <span className="text-lg">💪</span> Proactive
                  </span>
                </td>
                <td className="px-6 py-5">Gamify or offer incentives to encourage frequent reporting.</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-5 font-medium">Tracking</td>
                <td className="px-6 py-5">User monitors the cleanup progress and receives status notifications.</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 font-semibold text-orange-500 shadow-sm">
                    <span className="text-lg">📊</span> Informed
                  </span>
                </td>
                <td className="px-6 py-5">Enhance real-time tracking with more detailed status updates.</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-medium">Feedback</td>
                <td className="px-6 py-5">User joins cleanup events and provides feedback or suggestions for app improvements.</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 font-semibold text-orange-500 shadow-sm">
                    <span className="text-lg">🤝</span> Involved
                  </span>
                </td>
                <td className="px-6 py-5">Add social features to build a community and connect users.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Storyboards */}
      <div className="max-w-6xl mx-auto px-6 pb-12 flex flex-col gap-[50px]">
        <div>
          <h3 className="text-lg font-bold text-green-700 mb-4">UX Storyboard</h3>
          <div className="w-full rounded-2xl overflow-hidden border border-green-100 shadow">
            <img src="/Port_folio_story_board.jpg" alt="UX Storyboard" className="w-full h-auto object-cover" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-green-700 mb-4">UX Storyboard – Close up</h3>
          <div className="w-full rounded-2xl overflow-hidden border border-green-100 shadow">
            <img src="/Port_folio_story_board_.jpg" alt="UX Storyboard Close up" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
      
      {/* Information Architecture */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-10 flex items-center gap-2">
          <span>06</span> INFORMATION ARCHITECTURE
        </h2>
        <div className="overflow-x-auto">
          <div className="flex flex-col items-center">
            {/* Root node */}
            <div className="flex flex-col items-center">
              <div className="bg-green-500 text-white font-bold px-8 py-3 rounded-full shadow ">Welcome Screen</div>
              <div className="w-0.5 h-6 bg-green-400"></div>
              <div className="bg-green-400 text-white font-semibold px-8 py-3 rounded-full shadow ">Main Menu Screen</div>
              <div className="w-0.5 h-6 bg-green-400"></div>
            </div>
            {/* Connector line and menu items */}
            <div className="relative w-full max-w-5xl flex flex-col items-center">
              {/* Horizontal connector line (thinner) */}
              <div className="absolute left-25 right-25 h-0.25 bg-green-400" style={{zIndex: 0}}>
                <div className="flex flex-row justify-between w-full ">
                  <div className="h-5 w-0.5 bg-green-400 mb-1 z-0"></div>
                  <div className="h-5 w-0.5 bg-green-400 mb-1 z-0"></div>
                  <div className="h-5 w-0.5 bg-green-400 mb-1 z-0"></div>
                  <div className="h-5 w-0.5 bg-green-400 mb-1 z-0"></div>
                  <div className="h-5 w-0.5 bg-green-400 mb-1 z-0"></div>
                </div>
              </div>
              {/* Menu items in a row, pushed down to avoid overlap */}
              <div className="flex flex-row justify-between w-full z-10">
                
                {[
                  {
                    label: "Report",
                    children: ["Take Photo", "Mark in Map", "Congrats"]
                  },
                  {
                    label: "Your Activities",
                    children: ["Activity List", "Chat with Group/Officials"]
                  },
                  {
                    label: "Rewards",
                    children: ["Rewards Earned", "Rewards Redeem"]
                  },
                  {
                    label: "Events",
                    children: ["Events in the Town", "Your Events"]
                  },
                  {
                    label: "Articles",
                    children: ["Articles List", "Your Article"]
                  }
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center flex-1 min-w-[180px]">
                    {/* Menu item node */}
                    <div className="bg-white border-2 border-green-300 text-green-800 font-bold px-6 py-2 rounded-full shadow  mt-4">{item.label}</div>
                    {/* Vertical connector from horizontal line to menu item (below the line, thinner) */}
                    
                    <div className="w-0.5 h-4 bg-green-100"></div>
                    <div className="flex flex-col gap-2">
                      {item.children.map(child => (
                        <div key={child} className="bg-green-50 border border-green-200 px-4 py-2 rounded-full text-green-900">{child}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Low Fidelity Prototype (single image) */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
          <span>07</span> LOW FIDELITY PROTOTYPE
        </h2>
        <div className="w-full rounded-2xl overflow-hidden border border-green-100 shadow bg-white">
          <img src="/phone-screens/low-fidility-with-connections.png" alt="Low Fidelity Prototype" className="w-full h-auto object-contain" />
        </div>

      </div>

      {/* High Fidelity Prototype Carousel */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
          <span>08</span> HIGH FIDELITY PROTOTYPE
        </h2>
          {/* Responsive Figma Prototype Embed */}
          <div className="w-full mt-8 flex justify-center">
            <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-neutral-200 shadow">
              <iframe
                title="Figma Prototype"
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                src="https://embed.figma.com/proto/G7yDkOfeZSozy52ssygCHg/GreenEye-Project?node-id=134-1460&p=f&scaling=contain&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=134%3A1460&embed-host=share"
                allowFullScreen
                width="100%"
                height="100%"
                className="w-full h-full"
              />
            </div>
          </div>
      </div>

      {/* Usability Findings, Accessibility, Takeaways - Single Column */}
      <div className="max-w-6xl mx-auto px-6 pb-12 flex flex-col gap-12">
        <div>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>09</span> USABILITY FINDINGS
          </h2>
          <ul className="list-disc pl-6 text-neutral-700 mb-8 space-y-2">
            <li>Users preferred a single-tap report submission</li>
            <li>Visual feedback (e.g., progress bars, confirmation screens) increased engagement</li>
            <li>Some users struggled with map-based location selection</li>
            <li>Accessibility improvements needed for color contrast and text size</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>10</span> ACCESSIBILITY CONSIDERATIONS
          </h2>
          <ul className="list-disc pl-6 text-neutral-700 mb-8 space-y-2">
            <li>Sufficient color contrast for text and buttons</li>
            <li>Alt text for all images and icons</li>
            <li>Keyboard navigability for all interactive elements</li>
            <li>Scalable text and responsive layouts</li>
          </ul>
        </div>
        <div>


          {/* Synthesized Takeaways Insight */}
          <div className="mt-8 bg-green-100 border-l-4 border-green-500 rounded-xl p-5">
            <div className="font-semibold text-green-900 mb-1">Project Takeaways Insight</div>
          <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-8">
            <li>Community engagement is key to sustained usage</li>
            <li>Gamification and rewards drive participation</li>
            <li>Next steps: Launch pilot in more neighborhoods, integrate with local government systems, and conduct further accessibility testing</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
