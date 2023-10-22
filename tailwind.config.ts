import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
       "jobster":{
          "indigo":"#4F46E5",
          "indigo-light":"#6366F1",
          "indigo-extra-light":"#818CF8",
          "back":"#111827",
          "gray":"#6B7280",
          "gray-light":"#9CA3AF",
          "gray-extra-light":"#D1D5DB",
        }
      }
    },
  },
  plugins: [],
}
export default config
