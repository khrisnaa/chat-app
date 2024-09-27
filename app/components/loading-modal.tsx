'use client';

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { ClipLoader } from 'react-spinners';
export const LoadingModal = () => {
  return (
    <Transition show>
      <Dialog as="div" className="relative z-50" onClose={() => {}}>
        <TransitionChild
          enter="ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-100 bg-opacity-50 transition-opacity" />
        </TransitionChild>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <DialogPanel>
              <ClipLoader size={40} color="#0284c7" />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
