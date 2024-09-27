'use client';

import { ConversationBox } from '@/app/(site)/conversations/components/conversation-box';
import { GroupChatModal } from '@/app/(site)/conversations/components/groupchat-modal';
import { useConversation } from '@/app/hooks/use-conversation';
import { cn } from '@/app/libs/utils';
import { Prisma, User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdOutlineGroupAdd } from 'react-icons/md';

export type ConversationData = Prisma.ConversationGetPayload<{
  include: {
    users: true;
    messages: {
      include: {
        sender: true;
        seen: true;
      };
    };
  };
}>;

interface ConversationListProps {
  initialItems: ConversationData[];
  users: User[];
}

export const ConversationList = ({
  initialItems,
  users,
}: ConversationListProps) => {
  const [items, setItems] = useState(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const { conversationId, isOpen } = useConversation();

  return (
    <>
      <GroupChatModal
        users={users}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <aside
        className={cn(
          'fixed inset-y-0 overflow-y-auto border-r border-gray-200 pb-2 lg:left-20 lg:block lg:w-80 lg:pb-0',
          isOpen ? 'hidden' : 'left-0 block w-full',
        )}
      >
        <div className="px-5">
          <div className="mb-4 flex justify-between pt-4">
            <div className="text-2xl font-bold text-neutral-800">Messages</div>
            <div className="rounded-full bg-gray-100 p-2 text-gray-600 transition hover:opacity-75">
              <MdOutlineGroupAdd
                size={20}
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
          {items.map((item) => (
            <ConversationBox
              key={item.id}
              data={item}
              selected={conversationId == item.id}
            />
          ))}
        </div>
      </aside>
    </>
  );
};
