// import {
//   faEnvelope,
//   faEnvelopeOpen,
// } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import clsx from 'clsx';
// import { useTranslation } from 'react-i18next';

// import { Link } from '@/components/Elements';
// eslint-disable-next-line no-restricted-imports

// import { Panel } from '@/components/Panel';

import './DashBoard.scss';

import { ContentLayout } from '@/components/Layout';

// const NoticeList = () => {
//   const mockContent = [
//     {
//       id: 1,
//       date: '2023/03/03',
//       title: 'ご利用いただきありがとうございます',
//       isNew: true,
//       isRead: false,
//     },
//     {
//       id: 2,
//       date: '2023/03/03',
//       title: '10月末までに書類を送付してください',
//       isNew: true,
//       isRead: false,
//     },
//     {
//       id: 3,
//       date: '2023/03/03',
//       title: 'ファシリタスマニュアル',
//       isNew: false,
//       isRead: true,
//     },
//   ];
//   return (
//     <div className="notice__body">
//       <ul className="notice__list panel-border panel-box">
//         {mockContent.map((item) => {
//           return (
//             <li
//               key={item.id}
//               className={clsx(
//                 'notice__list--item',
//                 item.isNew && 'item-new',
//                 item.isRead && 'item-read',
//               )}
//             >
//               <Link to="">
//                 <div className="item--date">
//                   <FontAwesomeIcon
//                     icon={item.isRead ? faEnvelopeOpen : faEnvelope}
//                   />
//                   {item.date}
//                 </div>
//                 <div className="item--caption">
//                   {item.title}
//                   {item.isNew && <span className="label-new">NEW</span>}
//                 </div>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// const Contact = () => {
//   const { t } = useTranslation('dashboard');
//   return (
//     <div className="notice__footer">
//       <div className="notice__contact">
//         <div className="notice__contact-title">{t('contact')}:</div>
//         <Link to="">XXXX@xxxxx.xxxx</Link>
//       </div>
//     </div>
//   );
// };

export const DashBoard = () => {
  // const { t } = useTranslation('dashboard');

  return (
    // <ContentLayout className="notice">
    //   {/* <Panel title={t('notice')}>
    //     <NoticeList />
    //     <Contact />
    //   </Panel> */}
    //   {/* <ol style={{ marginLeft: '30px' }}>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/login">
    //         Page login
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/">
    //         Page dashboard
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/customers">
    //         Page customers
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/404">
    //         Page 404
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/internal-server-error">
    //         Page internal-server-error
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/property-groups/new">
    //         Page property-groups new
    //       </Link>
    //     </li>

    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/property-groups/edit">
    //         Page property-groups edit
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/property-groups/view">
    //         Page property-groups view
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/authority-groups/new">
    //         Page authority-groups
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/authority-groups/edit">
    //         Page authority-groups edit
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/authority-groups/view">
    //         Page authority-groups view
    //       </Link>
    //     </li>

    //     <li style={{ marginBottom: '20px', marginTop: '50px' }}>
    //       <Link target="_blank" to="/contacts">
    //         Page contact
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/contacts/1">
    //         Page contact detail
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/assignments">
    //         Page assignments list
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/tasks/1">
    //         Page task detail
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/tasks/calendar">
    //         Page calendar
    //       </Link>
    //     </li>
    //     <li style={{ marginBottom: '20px' }}>
    //       <Link target="_blank" to="/sidebar_ex">
    //         Sidebar ex
    //       </Link>
    //     </li>
    //   </ol> */}
    // </ContentLayout>
    <>Hhehehe</>
  );
};
