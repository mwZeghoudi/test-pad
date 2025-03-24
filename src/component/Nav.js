import React from 'react'
import MenuItem from './utils/MenuItem'
import {
  ChartNoAxesCombined,
  LifeBuoy,
  Users,
  House,
  Bell,
  Gift
} from 'lucide-react'

export default function Nav() {
  return (
    <aside className="col-span-2 p-2">
      <nav className='flex flex-col justify-between h-full'>
        <div className='flex flex-col h-full'>
          <MenuItem
            href='/dashboard'
            label='Dashboard'
            icon={<House />}
          />
          <MenuItem
            href='/deals'
            label='Deals'
            icon={<Gift />}
          />
          <MenuItem
            href='/analytics'
            label='Analytics'
            icon={<ChartNoAxesCombined />}
          />
          <MenuItem
            href='/staff'
            label='Staff'
            icon={<Users />}
          />
        </div>
        <div>

          <MenuItem
            href='/notification'
            label='Notification'
            icon={<Bell />}
          />
          <MenuItem
            href='/support'
            label='Support'
            icon={<LifeBuoy />}
          />
        </div>
      </nav>
    </aside>
  )
}
