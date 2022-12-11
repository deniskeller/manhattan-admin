import { BaseButton, BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { InputDataList } from '@content/index';
import { InvestFormCounter } from '@content/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import {TMainHeader} from "@content/Editor/plugins/MainHeader";
import {formsSlice} from "@store/forms/reducer";

const Header: React.FC<TMainHeader> = ({subtitle,description}) => {
  const { setPopup } = modalSlice.actions;
  const {setDataInvest} = formsSlice.actions;
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState({
    number_of_companies: 1,
    amount_of_investment: '25,000',
  });
  const amount_of_investment = +(value.amount_of_investment?.toString().replace(/\D+/g,""));

  const investFormHandler = () => {
    console.log("value====", value);
    //записать value в store
    dispatch(setDataInvest({data: {
      companiesToInvest: value.number_of_companies.toString(),
      investmentAmount: amount_of_investment?.toString()
      }}))
    setTimeout(()=>{
      dispatch(setPopup({ popup: 'InvestmentRequestPopup' }));
    },0)
  };

  const setNewValue = (val: string | number, key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

  const formatter2 = function(value: number | string) {
    let val = value;
    if (typeof value === "string") {
     val = +(value.replace(/\D+/g,""));
    }
    if (val?.toString()?.length > 9 ){val = +(val.toString().slice(0,9))}
    const int = String(Math.trunc(val as number));
    if(int.length <= 3) return int;
    let space = 0;
    let number = '';

    for(let i = int.length - 1; i >= 0; i--) {
      if(space == 3) {
        number = ',' + number;
        space = 0;
      }
      number = int.charAt(i) + number;
      space++;
    }
    return number;
  }

  return (
    <>
      <div className={styles.Header}>
        <div
          className={styles.BgImage}
          style={{
            backgroundImage: 'url(/images/image/main_header_bg.jpg)',
          }}
        ></div>

        <div
          className={styles.BgOverlay}
          style={{
            backgroundImage: 'url(/images/image/main_header_bg_overlay.jpg)',
          }}
        ></div>

        <BaseContainer>
          <div className={styles.Header_Container}>
            <div className={styles.Header_Subtitle}>
              <p>
                {subtitle}
                {/*Welcome to the future of FinTech In Manhattan VC Holding*/}</p>
            </div>

            <div className={styles.Header_Title}>
              <div className={styles.SpanWrapper}>
                <span>
                  <h1 className={styles.h1}>
                    we are&nbsp;
                    <br className={styles.mobile} />
                    <span className={styles.BottomLine1}>
                      building the future
                    </span>
                  </h1>
                </span>
              </div>

              <div className={styles.SpanWrapper}>
                <span>
                  <h1 className={styles.h2}> of the financial world</h1>
                </span>
              </div>

              <br />
              <div className={styles.SpanWrapper}>
                <span>
                  <h1 className={styles.h3}>
                    and creating real <br />
                  </h1>
                </span>
              </div>

              <div className={styles.SpanWrapper}>
                <span>
                  <h1 className={styles.h4}>
                    <span className={styles.BottomLine2}>
                      space rocket companies
                    </span>
                  </h1>
                </span>
              </div>
            </div>

            <div className="Header_Description animate__animated animate__fadeInUp animate__delay-5s">
              <div className={styles.Header_Description} dangerouslySetInnerHTML={{__html: description}}/>
               {/* <p>
                  Invest in Business <br /> with Manhattan VC Holding. <br /> As
                  Seen in Forbes with our founders
                </p>
              </div>*/}
            </div>

            <BaseIcon
              viewBox="0 0 40 40"
              icon={ALL_ICONS.ARROW}
              className={styles.InvestForm_BeforeIcon}
            />
            <div className="InvestForm animate__animated animate__fadeInUp animate__delay-5s">
              <div className={styles.InvestForm}>
                <div className={styles.InvestForm_Title}>
                  <h1>Get Clear profit</h1>
                </div>

                <div className={styles.InvestForm_Actions}>
                  <div className={styles.Row}>
                    <div className={styles.Row_Title}>
                      Choose amount of companies to invest
                    </div>
                    <InvestFormCounter
                      value={value.number_of_companies}
                      onChange={(val: string) => {
                        console.log("number_of_companies", val);
                        setNewValue(val, 'number_of_companies')
                      }
                      }
                    />
                  </div>

                  <div className={styles.Row}>
                    <div className={styles.Row_Title}>
                      Choose the investment amount
                    </div>
                    <InputDataList
                      placeholder="90,000"
                      name="amount_of_investment"
                      options={[
                        { value: 5000, title: '$ 5,000' },
                        { value: 10000, title: '$ 10,000' },
                        { value: 25000, title: '$ 25,000' },
                        { value: 50000, title: '$ 50,000' },
                        { value: 100000, title: '$ 100,000' },
                      ]}
                      value={formatter2(value.amount_of_investment)}
                      onChange={(val: string | number) => {
                        let f = formatter2(val);
                        console.log("val==",val);
                        console.log("ffff", f);
                        setNewValue(f, 'amount_of_investment')
                      }
                      }
                    />
                  </div>

                  <div className={styles.Row}>
                    <div className={styles.Row_Title}>Dividend </div>
                    <div className={styles.Row_Value}>{formatter.format(0.15 * amount_of_investment)}</div>
                  </div>

                  <div className={styles.Row}>
                    <div className={styles.Row_Title}>Timeline</div>
                    <div className={styles.Row_Value}>3 years</div>
                  </div>

                  <div className={styles.Border}></div>

                  <div className={styles.Row}>
                    <div
                      className={styles.Row_Title}
                      style={{ fontWeight: '500' }}
                    >
                      Investor Profit together with the invested funds
                    </div>
                    <div
                      className={styles.Row_Value}
                      style={{ fontWeight: '700' }}
                    >
                      { formatter.format(1.15 * amount_of_investment)}
                    </div>
                  </div>
                </div>

                <BaseButton
                  className={styles.InvestForm_Button}
                  title="Invest"
                  type="empty"
                  onClick={investFormHandler}
                />
              </div>
            </div>
          </div>

          <div className={styles.Header_Image}>
            <svg
              viewBox="0 0 796 797"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M758.854 351.157L759.493 349.877C762.689 340.92 766.525 332.283 770.999 323.966L786.341 288.779L795.61 267.346C795.93 263.827 795.93 259.989 795.61 256.47C795.61 237.597 786.022 220.323 770.36 210.086L749.584 202.089L713.467 188.014C702.281 183.216 691.733 177.458 681.505 170.74C659.771 156.665 641.232 138.111 626.849 116.359C620.137 106.123 614.384 95.5664 609.59 84.3704L596.485 50.4623L586.577 24.8713C576.349 10.4763 559.409 2.15924 541.83 2.15924C538.634 1.83935 535.757 1.83935 532.561 2.15924L509.229 12.3956L507.311 13.0354L472.152 24.8713C462.883 29.0298 453.295 32.2287 443.387 34.7878L440.51 38.3065V38.9463L436.674 39.906C411.424 45.0242 385.854 45.0242 360.604 39.906L356.769 38.9463V36.3872L355.49 34.7878C344.943 32.2287 334.395 29.0298 324.487 24.8713L289.328 9.51666C282.297 5.99789 275.265 2.79902 267.914 0.239916C264.398 -0.0799719 260.563 -0.0799719 257.047 0.239916C238.189 -0.39986 220.29 9.51666 211.34 26.1508C207.825 32.8685 204.629 39.5861 202.072 46.6236L188.008 82.7709C183.214 94.6068 177.461 105.803 170.749 116.359C156.685 138.111 138.147 156.665 116.413 170.74C105.865 177.458 94.6786 183.216 82.8526 188.014L48.9722 201.449C48.9722 201.449 29.1557 208.167 23.0829 211.366C8.06063 221.282 -0.888831 238.556 0.0700356 256.47C0.0700356 260.628 0.709378 264.467 1.66824 268.626C4.54485 275.983 7.74117 283.021 11.257 290.058L26.2793 324.606C30.4344 333.883 33.6305 343.479 36.1875 353.396L39.7034 356.275L40.3428 359.154C45.7763 384.425 45.7763 410.336 40.3428 435.607L39.064 440.725L36.8269 441.365L36.1875 442.005C33.3109 452.561 29.7949 462.797 25.0005 472.714L9.6588 507.902L0.0700356 529.654C0.0700356 533.173 0.0700356 537.011 0.0700356 540.53C0.0700356 559.403 9.65898 576.997 25.3205 587.234L46.0957 595.231L82.5327 609.626C93.7194 614.104 104.587 619.862 114.495 626.9C136.229 640.975 154.767 659.528 168.831 681.281C175.862 691.837 181.616 703.033 186.09 714.869L199.515 748.777L209.423 774.048C219.651 788.443 236.59 796.76 254.17 796.76C257.046 797.08 260.243 797.08 263.439 796.76L287.411 786.524L321.93 771.169C331.519 767.011 341.107 763.812 351.016 761.253L353.253 758.054L359.645 756.454C386.813 751.016 414.62 751.656 441.468 758.054V759.973L442.747 760.933C452.975 763.492 462.883 767.011 472.472 771.489L507.63 786.844C514.662 790.362 522.013 793.561 529.365 796.12C532.88 796.76 536.716 796.76 540.232 796.12C559.09 796.76 576.669 786.844 585.938 770.529C591.052 760.293 594.887 750.057 594.887 750.057L609.27 713.909C613.745 702.713 619.498 691.837 626.53 681.92C640.593 660.168 659.131 641.615 680.866 627.22C691.094 620.502 701.641 614.744 712.828 609.946L747.028 596.83C747.028 596.83 766.525 589.793 772.917 586.594C787.939 576.677 796.889 559.403 795.93 541.49C795.93 537.331 794.971 533.173 794.012 529.334C792.095 523.256 784.424 507.902 784.424 507.902L770.679 473.034C766.524 463.757 763.328 454.16 760.771 444.244L757.575 442.005L756.297 437.526C750.543 409.056 751.183 379.627 758.534 351.796H758.854V351.157ZM576.988 517.178C549.821 527.735 528.086 549.487 517.539 576.677L496.124 631.058V633.298L493.886 632.338H492.289L440.19 607.387C413.661 595.871 383.297 595.871 356.769 607.387L303.711 630.738H301.794L300.515 631.378V630.738L279.101 576.358C268.553 549.167 246.819 527.415 219.651 516.858L165.315 495.426H163.078L164.036 493.187V491.267L187.049 438.166C198.556 411.615 198.556 381.226 187.049 354.675L163.717 301.574H165.315L219.651 279.822C247.778 268.946 269.831 246.553 280.379 218.403L301.794 164.022V163.063H304.351L357.408 186.415C383.937 197.93 414.301 197.93 440.83 186.415L493.886 163.063H495.485L516.58 216.484C527.127 243.674 548.862 265.427 576.03 276.303L630.365 297.416H631.964L633.562 298.055L631.964 301.574V303.174L608.631 356.275C597.125 382.826 597.125 413.215 608.631 439.766L631.964 492.867V495.746H631.324L576.988 517.178Z"
                fill="black"
              />
            </svg>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Header;

/*
* import { BaseContainer } from '@base/index';
import React from 'react';
import styles from './Header.module.scss';
import {TMainHeader} from "@content/Editor/plugins/MainHeader";

const Header: React.FC<TMainHeader> = ({subtitle,description, mainText}) => {
  return (
    <>
      <div
        className={styles.Header}
        style={{
          backgroundImage: 'url(/images/image/main_header_bg.png)',
        }}
      >
        <BaseContainer>
          <div className={styles.Header_Subtitle}>
            <p>{subtitle}
             </p>
</div>

<div className={styles.Header_Title}>
<h1 dangerouslySetInnerHTML={{__html: mainText}}/>
</div>
<h1>
we are <br className={styles.mobile} />
<span>building the future</span> of the financial world
</h1>
<br />
<h1>
and creating real <br /> <span>space rocket companies</span>
</h1>
</div>

<div className={styles.Header_Description} dangerouslySetInnerHTML={{__html: description}}/>
<p>
Invest in Business <br /> with Manhattan VC Holding. <br /> As
Seen in Forbes with our founders
</p>
</div>

<div className={styles.Header_Image}>
<svg
viewBox="0 0 796 797"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
opacity="0.5"
d="M758.854 351.157L759.493 349.877C762.689 340.92 766.525 332.283 770.999 323.966L786.341 288.779L795.61 267.346C795.93 263.827 795.93 259.989 795.61 256.47C795.61 237.597 786.022 220.323 770.36 210.086L749.584 202.089L713.467 188.014C702.281 183.216 691.733 177.458 681.505 170.74C659.771 156.665 641.232 138.111 626.849 116.359C620.137 106.123 614.384 95.5664 609.59 84.3704L596.485 50.4623L586.577 24.8713C576.349 10.4763 559.409 2.15924 541.83 2.15924C538.634 1.83935 535.757 1.83935 532.561 2.15924L509.229 12.3956L507.311 13.0354L472.152 24.8713C462.883 29.0298 453.295 32.2287 443.387 34.7878L440.51 38.3065V38.9463L436.674 39.906C411.424 45.0242 385.854 45.0242 360.604 39.906L356.769 38.9463V36.3872L355.49 34.7878C344.943 32.2287 334.395 29.0298 324.487 24.8713L289.328 9.51666C282.297 5.99789 275.265 2.79902 267.914 0.239916C264.398 -0.0799719 260.563 -0.0799719 257.047 0.239916C238.189 -0.39986 220.29 9.51666 211.34 26.1508C207.825 32.8685 204.629 39.5861 202.072 46.6236L188.008 82.7709C183.214 94.6068 177.461 105.803 170.749 116.359C156.685 138.111 138.147 156.665 116.413 170.74C105.865 177.458 94.6786 183.216 82.8526 188.014L48.9722 201.449C48.9722 201.449 29.1557 208.167 23.0829 211.366C8.06063 221.282 -0.888831 238.556 0.0700356 256.47C0.0700356 260.628 0.709378 264.467 1.66824 268.626C4.54485 275.983 7.74117 283.021 11.257 290.058L26.2793 324.606C30.4344 333.883 33.6305 343.479 36.1875 353.396L39.7034 356.275L40.3428 359.154C45.7763 384.425 45.7763 410.336 40.3428 435.607L39.064 440.725L36.8269 441.365L36.1875 442.005C33.3109 452.561 29.7949 462.797 25.0005 472.714L9.6588 507.902L0.0700356 529.654C0.0700356 533.173 0.0700356 537.011 0.0700356 540.53C0.0700356 559.403 9.65898 576.997 25.3205 587.234L46.0957 595.231L82.5327 609.626C93.7194 614.104 104.587 619.862 114.495 626.9C136.229 640.975 154.767 659.528 168.831 681.281C175.862 691.837 181.616 703.033 186.09 714.869L199.515 748.777L209.423 774.048C219.651 788.443 236.59 796.76 254.17 796.76C257.046 797.08 260.243 797.08 263.439 796.76L287.411 786.524L321.93 771.169C331.519 767.011 341.107 763.812 351.016 761.253L353.253 758.054L359.645 756.454C386.813 751.016 414.62 751.656 441.468 758.054V759.973L442.747 760.933C452.975 763.492 462.883 767.011 472.472 771.489L507.63 786.844C514.662 790.362 522.013 793.561 529.365 796.12C532.88 796.76 536.716 796.76 540.232 796.12C559.09 796.76 576.669 786.844 585.938 770.529C591.052 760.293 594.887 750.057 594.887 750.057L609.27 713.909C613.745 702.713 619.498 691.837 626.53 681.92C640.593 660.168 659.131 641.615 680.866 627.22C691.094 620.502 701.641 614.744 712.828 609.946L747.028 596.83C747.028 596.83 766.525 589.793 772.917 586.594C787.939 576.677 796.889 559.403 795.93 541.49C795.93 537.331 794.971 533.173 794.012 529.334C792.095 523.256 784.424 507.902 784.424 507.902L770.679 473.034C766.524 463.757 763.328 454.16 760.771 444.244L757.575 442.005L756.297 437.526C750.543 409.056 751.183 379.627 758.534 351.796H758.854V351.157ZM576.988 517.178C549.821 527.735 528.086 549.487 517.539 576.677L496.124 631.058V633.298L493.886 632.338H492.289L440.19 607.387C413.661 595.871 383.297 595.871 356.769 607.387L303.711 630.738H301.794L300.515 631.378V630.738L279.101 576.358C268.553 549.167 246.819 527.415 219.651 516.858L165.315 495.426H163.078L164.036 493.187V491.267L187.049 438.166C198.556 411.615 198.556 381.226 187.049 354.675L163.717 301.574H165.315L219.651 279.822C247.778 268.946 269.831 246.553 280.379 218.403L301.794 164.022V163.063H304.351L357.408 186.415C383.937 197.93 414.301 197.93 440.83 186.415L493.886 163.063H495.485L516.58 216.484C527.127 243.674 548.862 265.427 576.03 276.303L630.365 297.416H631.964L633.562 298.055L631.964 301.574V303.174L608.631 356.275C597.125 382.826 597.125 413.215 608.631 439.766L631.964 492.867V495.746H631.324L576.988 517.178Z"
fill="black"
/>
</svg>
</div>
</BaseContainer>
</div>
</>
);
};

export default Header;

*
* */