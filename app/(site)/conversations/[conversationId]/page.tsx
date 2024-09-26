import { Body } from '@/app/(site)/conversations/[conversationId]/components/body';
import { Form } from '@/app/(site)/conversations/[conversationId]/components/form';
import { Header } from '@/app/(site)/conversations/[conversationId]/components/header';
import { getConversationById } from '@/app/actions/getConversationById';
import { getMessages } from '@/app/actions/getMessages';
import { EmptyState } from '@/app/components/empty-state';

const Page = async ({ params }: { params: { conversationId: string } }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="h-full lg:pl-80">
        <div className="flex h-full flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full lg:pl-80">
      <div className="flex h-full flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};
export default Page;
