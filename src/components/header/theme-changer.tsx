'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { MoonIcon, SunIcon } from 'lucide-react'
export default function ThemeChanger()  {
  const { theme, setTheme } = useTheme()
  const [logo, setLogo] = useState(theme === 'dark' ? 'sith.svg' : 'jedi.svg');

  useEffect(() => {
    setLogo(theme === 'dark' ? 'sith.svg' : 'jedi.svg');
  }, [theme]);

  return (
    <div className="text-black dark:text-white">
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="opacity-100 hover:text-green-600 active:opacity-60">
        <Image
            className="h-6 w-auto dark:invert"
            src={`/${logo}`}
            alt=""
            width={32}
            height={32}
          />
      </button>
    </div>
  )
}
