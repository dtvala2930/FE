import clsx from 'clsx';
import { useState } from 'react';

import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';

import './MainLayout.scss';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);

  const handleToggleSlidebar = () => {
    setIsHiddenSidebar(!isHiddenSidebar);
  };

  return (
    <>
      <Header
        isHiddenSidebar={isHiddenSidebar}
        toggleSidebar={handleToggleSlidebar}
      />
      <div className={clsx('layout', isHiddenSidebar && 'layout__full-main')}>
        <div className="layout__sidebar">
          <Sidebar
            isHiddenSidebar={isHiddenSidebar}
            toggleSidebar={handleToggleSlidebar}
          />
        </div>
        <main className="layout__main">{children}</main>
      </div>
    </>
  );
};
