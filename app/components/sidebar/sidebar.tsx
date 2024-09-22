import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { DesktopSidebar } from '@/app/components/sidebar/desktop-sidebar';
import { MobileFooter } from '@/app/components/sidebar/mobile-footer';

export const Sidebar = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser} />
      <MobileFooter />
      <main className="h-full lg:pl-20">{children}</main>
    </div>
  );
};
