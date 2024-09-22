import { Sidebar } from '@/app/components/sidebar/sidebar';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};
export default Layout;
