'use client';

import { EmptyState } from '@/app/components/empty-state';
import { useConversation } from '@/app/hooks/use-conversation';
import { cn } from '@/app/libs/utils';

const Page = () => {
  const { isOpen } = useConversation();
  return (
    <div
      className={cn('h-full lg:block lg:pl-80', isOpen ? 'block' : 'hidden')}
    >
      <EmptyState />
    </div>
  );
};
export default Page;
