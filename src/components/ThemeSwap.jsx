import { Heart, Moon, Star, Sun, SunIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ThemeSwap = () => {
    const[isDark, setIsDark] = useState(false)

    const handleTheme = () => {
      setIsDark(!isDark)
    }

    useEffect(() => {
        document.documentElement.dataset.theme = isDark ? 'cupcake':'pastel'
    }, [isDark])

    if(isDark) {
        return  <button className='btn btn-circle' onClick={handleTheme}>
            <Star/>
        </button>
    }
        return<button className='btn btn-circle'onClick={handleTheme}>
            <Heart/>
        </button>
    }


export default ThemeSwap