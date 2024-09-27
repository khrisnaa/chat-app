'use client';

import { useActiveChannel } from '@/app/hooks/use-active-channel';

export const ActiveStatus = () => {
  useActiveChannel();
  return null;
};
