import React from 'react'
import MenuItem from './utils/MenuItem'
export default function Nav() {
  return (
    <aside className="col-span-2 p-2">
      <nav className='flex flex-col justify-between h-full'>
        <div className='flex flex-col h-full'>
          <MenuItem
            href='/dashboard'
            label='Dashboard'
            icon={<ion-icon name="home-outline"></ion-icon>}
          />
          <MenuItem
            href='/deals'
            label='Deals'
            icon={<ion-icon name="gift-outline"></ion-icon>}
          />
          <MenuItem
            href='/analytics'
            label='Analytics'
            icon={<ion-icon name="stats-chart-outline"></ion-icon>}
          />
          <MenuItem
            href='/staff'
            label='Staff'
            icon={<ion-icon name="people-outline"></ion-icon>}
          />
        </div>
        <div>
          <MenuItem
            href='/analytics'
            label='Analytics'
            icon={<ion-icon name="stats-chart-outline"></ion-icon>}
          />
          <MenuItem
            href='/staff'
            label='Staff'
            icon={<ion-icon name="people-outline"></ion-icon>}
          />
        </div>
      </nav>
    </aside>
  )
}
