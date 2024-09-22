import { ConversationList } from '@/app/(site)/conversations/components/conversation-list';
import { getConversations } from '@/app/actions/getConversations';
import { Sidebar } from '@/app/components/sidebar/sidebar';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const conversations = await getConversations();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
};
export default Layout;
