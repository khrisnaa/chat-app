'use client';

import { MessageBox } from '@/app/(site)/conversations/[conversationId]/components/message-box';
import { useConversation } from '@/app/hooks/use-conversation';
import { Message, Prisma } from '@prisma/client';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

export type MessageData = Prisma.MessageGetPayload<{
  include: {
    seen: true;
    sender: true;
  };
}>;
interface BodyProps {
  initialMessages: MessageData[];
}

export const Body = ({ initialMessages }: BodyProps) => {
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox
          key={message.id}
          isLast={messages.length - 1 == i}
          data={message}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
};
