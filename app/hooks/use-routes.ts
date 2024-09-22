import { useConversation } from '@/app/hooks/use-conversation';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { HiChat, HiUsers } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUser } from 'react-icons/hi2';

export const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: 'Chat',
        href: '/conversations',
        icon: HiChat,
        active: pathname === '/conversations' || !!conversationId,
      },
      {
        label: 'Users',
        href: '/users',
        icon: HiUsers,
        active: pathname === '/users',
      },
      {
        label: 'Logout',
        href: '#',
        onClick: () => signOut(),
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname, conversationId],
  );

  return routes;
};
