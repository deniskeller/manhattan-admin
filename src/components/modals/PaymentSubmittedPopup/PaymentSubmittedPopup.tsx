import React from 'react';
import styles from './PaymentSubmittedPopup.module.scss';
import { BaseButtonApp, BasePopupApp, BaseTitle } from '@base/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';

interface Props {
  className: string;
}

const PaymentSubmittedPopup: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { setPopup } = modalSlice.actions;

  const submitHandler = () => {
    dispatch(setPopup({ popup: '' }));
  };

  return (
    <BasePopupApp className={className} type="middle">
      <div className={styles.Icon}>
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dd_7518_179001)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.0481 16.3515C30.5168 16.8201 30.5168 17.5799 30.0481 18.0485L20.4481 27.6485C19.9795 28.1172 19.2197 28.1172 18.7511 27.6485L13.9511 22.8485C13.4825 22.3799 13.4825 21.6201 13.9511 21.1515C14.4197 20.6828 15.1795 20.6828 15.6481 21.1515L19.5996 25.1029L28.3511 16.3515C28.8197 15.8828 29.5795 15.8828 30.0481 16.3515Z"
              fill="#10B77F"
            />
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="21.5"
              stroke="#A5F3CF"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_7518_179001"
              x="-3"
              y="-2"
              width="50"
              height="50"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7518_179001"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_7518_179001"
                result="effect2_dropShadow_7518_179001"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_7518_179001"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <BaseTitle type="app" className={styles.Title}>
        Payment submitted
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>
          Very soon we will confirm your payment, and you will be notificated
          about the balance increace. You can track all payment statuses in
          account section.
        </p>
      </div>

      <BaseButtonApp
        title="Financial records"
        type="primary"
        onClick={() => submitHandler()}
        className={styles.Button}
      />
    </BasePopupApp>
  );
};

export default PaymentSubmittedPopup;
