import { UserList } from '@/app/(site)/users/components/user-list';
import { getUsers } from '@/app/actions/getUsers';
import { Sidebar } from '@/app/components/sidebar/sidebar';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
};
export default Layout;
