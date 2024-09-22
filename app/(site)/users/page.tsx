import { EmptyState } from '@/app/components/empty-state';

const Page = async () => {
  return (
    <div className="hidden h-full lg:block lg:pl-80">
      <EmptyState />
    </div>
  );
};
export default Page;
