'use client';

import { useState } from 'react';

export default function ServiceToggle() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative mb-4 w-full max-w-md">
      <div className="flex items-center gap-2 mb-2">
        {/* Checkbox */}
        <input
          id="services-toggle"
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="w-6 h-6 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
        />

        {/* Label */}
        <label htmlFor="services-toggle" className="cursor-pointer select-none xl:text-[20px] text:[18px] font-medium">
          Get Services
        </label>
      </div>

      {/* Toggle content */}
      <div
        className={`
          transition-all duration-300 overflow-hidden
           rounded-lg px-6 py-4 space-y-3 text-sm leading-relaxed
          ${checked ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div>
          <p className="font-medium text-base">Arena Web Security</p>
          <p>House No-1, BLOCK-B</p>
          <p>Banasree, Main Road Rampura</p>
          <p>Dhaka - 1219</p>
        </div>

        <div>
          <p className="font-medium">Phone</p>
          <p>+880 1310 333 444</p>
          <p>+880 1885 841 489</p>
        </div>

        <div>
          <p className="font-medium">Email</p>
          <p>
            <a
              href="mailto:info@arenawebsecurity.net"
              className="hover:underline hover:text-gray-600 transition-colors"
            >
              info@arenawebsecurity.net
            </a>
          </p>
        </div>

        <div>
          <p className="font-medium">Website</p>
          <p>
            <a
              href="https://www.arenawebsecurity.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-gray-600 transition-colors"
            >
              www.arenawebsecurity.net
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
