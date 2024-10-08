'use client';
import { useActiveList } from '@/app/hooks/use-active-list';
import { User } from '@prisma/client';
import Image from 'next/image';

interface AvatarProps {
  user: User | null;
}

export const Avatar = ({ user }: AvatarProps) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;
  return (
    <div className="relative">
      <div className="relative inline-block h-9 w-9 overflow-hidden rounded-full md:h-11 md:w-11">
        <Image
          src={user?.image || '/profile.webp'}
          alt="profile placeholder"
          fill
        />
      </div>
      {isActive && (
        <span className="absolute right-0 top-0 block h-2 w-2 rounded-full bg-green-500 ring-2 ring-white md:h-3 md:w-3" />
      )}
    </div>
  );
};
