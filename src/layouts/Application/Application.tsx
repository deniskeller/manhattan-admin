import React, { LegacyRef, Ref, useEffect, useState } from 'react';
import styles from './Application.module.scss';
import { HeaderApp, Sidebar } from 'components/app';

import { useRouter } from 'next/router';
import {
  AcceptApplicationPopup,
  ChangePhoneNumberPopup,
  DeleteAllNotificationsPopup,
  DeleteArticlePopup,
  EditPhotoArticlePopup,
  InvestConfirmPopup,
  InvestorDocumentsUploadFilePopup,
  InvestorUserDetailsPopup,
  MakeDepositPopup,
  MakePayoutPopup,
  NotificationsPopup,
  PaymentSubmittedPopup,
  PublishArticlePopup,
  RejectApplicationPopup,
  SaveArticlePopup,
  SelectActionPopup,
  TeamInviteUserPopup,
  TeamUserDetailsPopup,
  TwoFactorAuthenticationPopup,
} from 'components/modals';

const admin_pages = [
  {
    name: 'Projects',
    path: '/app/admin/projects',
  },
  {
    name: 'Applications',
    path: '/app/admin/applications',
  },
  {
    name: 'Investors',
    path: '/app/admin/investors',
  },
  {
    name: 'Team',
    path: '/app/admin/team',
  },
  {
    name: 'Transactions',
    path: '/app/admin/transactions',
  },
  {
    name: 'Articles',
    path: '/app/admin/articles',
  },
  {
    name: 'Forms',
    path: '/app/admin/forms',
  },
];

const user_pages = [
  {
    name: 'Company',
    path: '/app/user/company',
  },
  {
    name: 'Projects',
    path: '/app/user/projects',
  },
  {
    name: 'Team',
    path: '/app/user/team',
  },
  {
    name: 'Profile',
    path: '/app/user/profile',
  },
];

interface Props {
  children: JSX.Element;
  ref?: LegacyRef<HTMLDivElement> | undefined;
  onScroll?: any;
}

const Application: React.FC<Props> = ({ children, ref, onScroll }) => {
  const router = useRouter();
  const [pages, setPages] = useState(admin_pages);

  //моковая авторизация
  useEffect(() => {
    if (router.pathname.split('/')[2] === 'admin') {
      setPages(admin_pages);
    }
    if (router.pathname.split('/')[2] === 'user') {
      setPages(user_pages);
    }
  }, [router.pathname]);

  return (
    <>
      <div className={styles.AppLayout}>
        <HeaderApp />

        <Sidebar pages={pages} />

        <div className={styles.AppLayout_Content} ref={ref} onScroll={onScroll}>
          {children}
        </div>
      </div>

      <DeleteAllNotificationsPopup className="DeleteAllNotificationsPopup" />
      <AcceptApplicationPopup className="AcceptApplicationPopup" />
      <RejectApplicationPopup className="RejectApplicationPopup" />
      <NotificationsPopup className="NotificationsPopup" />
      <EditPhotoArticlePopup className="EditPhotoArticlePopup" />
      <PublishArticlePopup className="PublishArticlePopup" />
      <SaveArticlePopup className="SaveArticlePopup" />
      <DeleteArticlePopup className="DeleteArticlePopup" />
      <ChangePhoneNumberPopup className="ChangePhoneNumberPopup" />
      <InvestorDocumentsUploadFilePopup className="InvestorDocumentsUploadFilePopup" />
      <InvestorUserDetailsPopup className="InvestorUserDetailsPopup" />
      <TeamInviteUserPopup className="TeamInviteUserPopup" />
      <TwoFactorAuthenticationPopup className="TwoFactorAuthenticationPopup" />
      <TeamUserDetailsPopup className="TeamUserDetailsPopup" />
      <MakeDepositPopup className="MakeDepositPopup" />
      <PaymentSubmittedPopup className="PaymentSubmittedPopup" />
      <SelectActionPopup className="SelectActionPopup" />
      <MakePayoutPopup className="MakePayoutPopup" />
      <InvestConfirmPopup className="InvestConfirmPopup" />
    </>
  );
};

export default Application;
