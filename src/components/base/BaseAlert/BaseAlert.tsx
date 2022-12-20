import { BaseIcon } from '@base/index';

import { ToastType, useToaster, toast as toastOBj } from 'react-hot-toast';
import { ALL_ICONS } from '@constants/icons';
import styles from './BaseAlert.module.scss';

const BaseAlert = () => {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause, calculateOffset, updateHeight } = handlers;

  const typeIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return (
          <>
            <BaseIcon
              className={styles.BaseAlert__success_icon}
              viewBox="0 0 44 44"
              icon={ALL_ICONS.ADMIN_TOAST_SUCCESS_LIGHT}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={styles.BaseAlert}
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      {toasts.map((toast) => {
        const offset = calculateOffset(toast, {
          reverseOrder: false,
          gutter: 8,
        });

        const ref = (el: HTMLDivElement) => {
          if (el && !toast.height) {
            const height = el.getBoundingClientRect().height;
            updateHeight(toast.id, height);
          }
        };

        return (
          <div
            className={styles.BaseAlert__toast}
            key={toast.id}
            ref={ref}
            style={{
              position: 'absolute',
              transition: 'all 0.5s ease-out',
              opacity: toast.visible ? 1 : 0,
              transform: `translateY(${offset}px)`,
            }}
            {...toast.ariaProps}
          >
            <div className={styles.BaseAlert__content}>
              {typeIcon(toast.type)}
              <span>{toast.message}</span>
            </div>
            {
              <BaseIcon
                className={styles.BaseAlert__tick_icon}
                viewBox="0 0 22 22"
                icon={ALL_ICONS.TICK_ICON_LIGHT}
                onClick={() => {
                  toast.visible = false;
                  toastOBj.dismiss(toast.id);
                }}
              />
            }
          </div>
        );
      })}
    </div>
  );

  // return (
  //   <div
  //     className={styles.BaseAlert}
  //     onMouseEnter={startPause}
  //     onMouseLeave={endPause}
  //   >
  //     {toasts.map((toast) => {
  //       const ref = (el: HTMLDivElement) => {
  //         if (el && !toast.height) {
  //           const height = el.getBoundingClientRect().height;
  //           updateHeight(toast.id, height);
  //         }
  //       };

  //       return (
  //         <div
  //           className={styles.BaseAlert__toast}
  //           key={toast.id}
  //           ref={ref}
  //           style={{
  //             opacity: toast.visible ? 1 : 0,
  //           }}
  //           {...toast.ariaProps}
  //         >
  //           <div className={styles.BaseAlert__content}>
  //             {typeIcon(toast.type)}
  //             <span>{toast.message}</span>
  //           </div>
  //           {
  //             <BaseIcon
  //               className={styles.BaseAlert__tick_icon}
  //               viewBox="0 0 22 22"
  //               icon={ALL_ICONS.TICK_ICON_LIGHT}
  //               onClick={() => {
  //                 toast.visible = false;
  //                 toastOBj.dismiss(toast.id);
  //               }}
  //             />
  //           }
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};

export default BaseAlert;
