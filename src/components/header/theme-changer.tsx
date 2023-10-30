'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { MoonIcon, SunIcon } from 'lucide-react'
export default function ThemeChanger()  {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  const [logo, setLogo] = useState(theme === 'dark' ? 'jedi.svg' : 'sith.svg');

  useEffect(() => {
    setLogo(theme === 'dark' ? 'jedi.svg' : 'sith.svg');
  }, [theme]);

  return (
    <div className="text-black dark:text-white">
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="opacity-100 hover:text-green-600 active:opacity-60">
        <Image
            className="h-6 w-auto dark:invert hidden dark:block"
            src={`/jedi.svg`}
            alt=""
            width={32}
            height={32}
          />
        <Image
            className="h-6 w-auto dark:invert dark:hidden"
            src={`/sith.svg`}
            alt=""
            width={32}
            height={32}
          />
      </button>
    </div>
  )
}
