'use client';

import { cn } from '@/app/libs/utils';
import Link from 'next/link';

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

export const DesktopItem = ({
  href,
  icon: Icon,
  label,
  active,
  onClick,
}: DesktopItemProps) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={cn(
          'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 hover:text-black',
          active && 'bg-gray-100 text-black',
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};
