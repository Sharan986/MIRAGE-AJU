import React from 'react'

const Last = () => {
  return (
  <>
  <div class="bg-[#0B1120] text-white py-10 px-6">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    <div>
      <div class="flex items-center gap-2">
        <span class="text-2xl">💜</span>
        <h1 class="text-xl font-bold">SwasthyaSetu</h1>
      </div>
      <p class="mt-2 text-sm text-gray-400">
        Connecting rural communities with quality healthcare
      </p>
    </div>

   
    <div>
      <h2 class="font-semibold mb-2">Quick Links</h2>
      <ul class="space-y-1 text-sm text-gray-300">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

   
    <div>
      <h2 class="font-semibold mb-2">Resources</h2>
      <ul class="space-y-1 text-sm text-gray-300">
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
      </ul>
    </div>

    
    <div>
      <h2 class="font-semibold mb-2">Language</h2>
      <select class="bg-gray-800 text-white text-sm p-2 rounded w-full">
        <option>English</option>
      </select>
    </div>
  </div>

  
  <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
    © 2025 SwasthyaSetu. All rights reserved.
  </div>
</div>
  </>
  )
}

export default Last
