'use client';

import { Avatar } from '@/app/components/avatar';
import { DesktopItem } from '@/app/components/sidebar/desktop-item';
import { useRoutes } from '@/app/hooks/use-routes';
import { User } from '@prisma/client';
import { useState } from 'react';

interface DesktopSidebarProps {
  currentUser: User | null;
}

export const DesktopSidebar = ({ currentUser }: DesktopSidebarProps) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden justify-between lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:flex lg:w-20 lg:flex-col lg:overflow-y-auto lg:border-r-[1px] lg:bg-white lg:pb-4 xl:px-6">
      <nav className="mt-4 flex flex-col justify-between">
        <ul role="list" className="flex flex-col items-center space-y-1">
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </nav>
      <nav className="mt-4 flex flex-col items-center justify-between">
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer transition hover:opacity-75"
        >
          <Avatar user={currentUser} />
        </div>
      </nav>
    </div>
  );
};
