'use client';

import { cn } from '@/app/libs/utils';
import Link from 'next/link';

interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

export const MobileItem = ({
  href,
  icon: Icon,
  active,
  onClick,
}: MobileItemProps) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'group flex w-full justify-center gap-x-3 p-4 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 hover:text-black',
        active && 'bg-gray-100 text-black',
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};
