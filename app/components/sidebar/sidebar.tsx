import { DesktopSidebar } from '@/app/components/sidebar/desktop-sidebar';

export const Sidebar = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <main className="h-full lg:pl-20">{children}</main>
    </div>
  );
};
