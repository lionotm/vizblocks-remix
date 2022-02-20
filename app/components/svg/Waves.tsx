import React from 'react'
import { useTheme } from '~/utils/theme'

export default function Waves() {
  const { theme } = useTheme()

  return (
    <svg width='100%' height='100%' viewBox='0 0 3000 130' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0L124.219 4.88439C250.781 9.76879 499.219 19.5376 750 36.0694C1000.78 52.9769 1249.22 77.0231 1500 81.9075C1750.78 86.7919 1999.22 72.1387 2250 67.6301C2500.78 62.7457 2749.22 67.6301 2875.78 69.8844L3000 72.1387V130H2875.78C2749.22 130 2500.78 130 2250 130C1999.22 130 1750.78 130 1500 130C1249.22 130 1000.78 130 750 130C499.219 130 250.781 130 124.219 130H0V0Z'
        fill={theme.palette.secondary.light}
        fillOpacity='0.3'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 52L100 62.4C200 72.8 400 93.6 600 88.4C800 83.2 1000 52 1200 31.2C1400 10.4 1600 0 1800 0C2000 0 2200 10.4 2400 28.6C2600 46.8 2800 72.8 2900 85.8L3000 98.8V130H2900C2800 130 2600 130 2400 130C2200 130 2000 130 1800 130C1600 130 1400 130 1200 130C1000 130 800 130 600 130C400 130 200 130 100 130H0V52Z'
        fill={theme.palette.secondary.main}
        fillOpacity='0.6'
      />
    </svg>
  )
}
