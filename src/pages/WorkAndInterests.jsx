import React from "react";

export default function WorkAndInterests() {
  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pb-24 bg-white rounded-[20px]">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-[1.1] tracking-tight">
          Work & Interests
        </h1>
        <p className="text-lg lg:text-xl text-neutral-500 max-w-xl mb-8">
          Explore my case studies, collaborative projects, and areas of interest in design, technology, and civic engagement.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Case Studies</h2>
        <ul className="space-y-6">
          <li className="bg-green-50 border border-green-200 rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold text-green-900 mb-2">Green Eye: Civic Engagement Platform</h3>
            <p className="text-neutral-700 mb-2">A platform empowering citizens to report littering, track environmental activities, and access educational resources for a cleaner community.</p>
            <a href="/greeneye" className="text-green-700 font-medium hover:underline">Read Case Study →</a>
          </li>
          {/* Add more case studies here */}
        </ul>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Interests</h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-green-100 text-green-900 rounded-full px-6 py-3 font-medium shadow-sm border border-green-200">UX Design</span>
          <span className="bg-green-100 text-green-900 rounded-full px-6 py-3 font-medium shadow-sm border border-green-200">Civic Tech</span>
          <span className="bg-green-100 text-green-900 rounded-full px-6 py-3 font-medium shadow-sm border border-green-200">Sustainability</span>
          <span className="bg-green-100 text-green-900 rounded-full px-6 py-3 font-medium shadow-sm border border-green-200">Web Development</span>
          <span className="bg-green-100 text-green-900 rounded-full px-6 py-3 font-medium shadow-sm border border-green-200">Community Engagement</span>
          {/* Add more interests here */}
        </div>
      </div>
    </div>
  );
}
