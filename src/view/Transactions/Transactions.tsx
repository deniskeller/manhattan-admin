import { BaseAlert, BaseButtonApp } from '@base/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import s from './Transactions.module.scss';

const Transactions: React.FC = () => {
  const { setPopup } = modalSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={s.Transactions}>
        <div className={s.Transactions_Statistics}>
          <div className={s.Transactions_Statistics_Item}>
            <div className={s.Transactions_Statistics_Item_Label}>
              <span>Number of investors</span>
            </div>
            <div className={s.Transactions_Statistics_Item_Value}>45</div>
          </div>

          <div className={s.Transactions_Statistics_Item}>
            <div className={s.Transactions_Statistics_Item_Label}>
              <span>Active investors</span>
            </div>
            <div className={s.Transactions_Statistics_Item_Value}>38</div>
          </div>

          <div className={s.Transactions_Statistics_Item}>
            <div className={s.Transactions_Statistics_Item_Label}>
              <span>Amount of invested funds</span>
            </div>
            <div className={s.Transactions_Statistics_Item_Value}>
              $15,000.35
            </div>
          </div>

          <div className={s.Transactions_Statistics_Item}>
            <div className={s.Transactions_Statistics_Item_Label}>
              <span>Number of dividends paid</span>
            </div>
            <div className={s.Transactions_Statistics_Item_Value}>
              $8,183.05
            </div>
          </div>
        </div>

        <div className={s.Transactions_Table}>
          <p>
            кнопки для вызова модалок <br />
            убрать и заменить на таблицу
          </p>

          <BaseButtonApp
            title="Select action(кебаб)"
            type="primary"
            size="small"
            onClick={() => dispatch(setPopup({ popup: 'SelectActionPopup' }))}
          />
          <br />
          <BaseButtonApp
            title="Make payout"
            type="primary"
            size="small"
            onClick={() => dispatch(setPopup({ popup: 'MakePayoutPopup' }))}
          />
        </div>
      </div>
      <BaseAlert />
    </>
  );
};

export default Transactions;
