import { ConversationList } from '@/app/(site)/conversations/components/conversation-list';
import { getConversations } from '@/app/actions/getConversations';
import { getUsers } from '@/app/actions/getUsers';
import { Sidebar } from '@/app/components/sidebar/sidebar';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} users={users} />
        {children}
      </div>
    </Sidebar>
  );
};
export default Layout;
