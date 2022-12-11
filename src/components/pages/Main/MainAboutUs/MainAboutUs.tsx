import { BaseContainer, BaseText } from '@base/index';
import { Logo } from '@content/index';
import React, { useState } from 'react';
import styles from './MainAboutUs.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Waypoint } from 'react-waypoint';
import {TMainAbout} from "@content/Editor/plugins/MainAboutUsPlugin";

const MainAboutUs: React.FC<TMainAbout> = ({description,
                                             titleStatistics,
                                             subtitleStatistics,
                                             parameters,
                                             descriptionStatistics,
                                             benefitsDescription,
                                             benefits
                                           }) => {
  const [fullWidth, setFullWidth] = useState(false);

  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.MainAboutUs_GearImage}>
          <svg
            viewBox="0 0 1020 1021"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M972.4 449.851L973.22 448.211C977.315 436.737 982.23 425.673 987.964 415.018L1007.62 369.941L1019.5 342.485C1019.91 337.977 1019.91 333.06 1019.5 328.552C1019.5 304.374 1007.21 282.245 987.145 269.132L960.523 258.887L914.242 240.856C899.907 234.709 886.392 227.333 873.285 218.727C845.435 200.696 821.68 176.928 803.249 149.062C794.648 135.949 787.277 122.426 781.133 108.083L764.341 64.6449L751.644 31.8614C738.538 13.4207 716.831 2.76611 694.305 2.76611C690.209 2.35631 686.523 2.35631 682.427 2.76611L652.529 15.8795L650.072 16.6991L605.019 31.8614C593.142 37.1887 580.855 41.2867 568.159 44.565L564.472 49.0727V49.8923L559.557 51.1217C527.202 57.6784 494.436 57.6784 462.081 51.1217L457.166 49.8923V46.614L455.528 44.565C442.012 41.2867 428.496 37.1887 415.8 31.8614L370.747 12.1914C361.737 7.68363 352.727 3.58569 343.307 0.307345C338.801 -0.102448 333.887 -0.102448 329.381 0.307345C305.217 -0.512242 282.281 12.1914 270.813 33.5006C266.308 42.1063 262.212 50.7119 258.936 59.7274L240.915 106.034C234.771 121.196 227.4 135.539 218.799 149.062C200.778 176.928 177.022 200.696 149.172 218.727C135.656 227.333 121.322 234.709 106.168 240.856L62.7533 258.067C62.7533 258.067 37.3603 266.673 29.5786 270.771C10.329 283.475 -1.13895 305.603 0.0897442 328.552C0.0897442 333.879 0.909002 338.797 2.1377 344.124C5.8238 353.549 9.91958 362.565 14.4248 371.58L33.6745 415.838C38.9988 427.722 43.0944 440.016 46.3709 452.719L50.8762 456.407L51.6955 460.095C58.6581 492.469 58.6581 525.662 51.6955 558.036L50.0569 564.593L47.1902 565.412L46.3709 566.232C42.6848 579.755 38.1794 592.868 32.0359 605.572L12.3769 650.649L0.0897442 678.515C0.0897442 683.023 0.0897442 687.94 0.0897442 692.448C0.0897442 716.626 12.3771 739.165 32.4458 752.278L59.0674 762.523L105.758 780.964C120.093 786.701 134.018 794.077 146.715 803.092C174.565 821.123 198.32 844.891 216.341 872.757C225.351 886.28 232.724 900.623 238.458 915.786L255.659 959.224L268.356 991.597C281.462 1010.04 303.169 1020.69 325.695 1020.69C329.381 1021.1 333.477 1021.1 337.573 1020.69L368.29 1007.58L412.523 987.909C424.81 982.582 437.097 978.484 449.794 975.206L452.661 971.108L460.852 969.059C495.665 962.092 531.297 962.912 565.701 971.108V973.566L567.339 974.796C580.445 978.074 593.142 982.582 605.429 988.319L650.481 1007.99C659.492 1012.5 668.911 1016.59 678.331 1019.87C682.837 1020.69 687.752 1020.69 692.257 1019.87C716.422 1020.69 738.947 1007.99 750.825 987.09C757.378 973.976 762.293 960.863 762.293 960.863L780.723 914.556C786.457 900.213 793.83 886.28 802.84 873.577C820.861 845.711 844.616 821.943 872.466 803.502C885.572 794.897 899.088 787.52 913.423 781.373L957.247 764.572C957.247 764.572 982.23 755.556 990.421 751.458C1009.67 738.755 1021.14 716.626 1019.91 693.678C1019.91 688.35 1018.68 683.023 1017.45 678.105C1015 670.319 1005.17 650.649 1005.17 650.649L987.554 605.982C982.23 594.098 978.134 581.804 974.858 569.101L970.762 566.232L969.124 560.495C961.752 524.023 962.571 486.322 971.991 450.67H972.4V449.851ZM739.357 662.533C704.544 676.057 676.693 703.922 663.178 738.755L635.737 808.42V811.288L632.87 810.059H630.822L564.063 778.095C530.069 763.342 491.16 763.342 457.166 778.095L389.178 808.01H386.72L385.082 808.83V808.01L357.642 738.345C344.126 703.513 316.275 675.647 281.462 662.124L211.835 634.667H208.969L210.197 631.799V629.34L239.686 561.314C254.431 527.302 254.431 488.371 239.686 454.358L209.788 386.333H211.835L281.462 358.467C317.504 344.534 345.764 315.848 359.28 279.786L386.72 210.122V208.892H389.997L457.985 238.807C491.979 253.56 530.888 253.56 564.882 238.807L632.87 208.892H634.918L661.949 277.328C675.465 312.16 703.315 340.026 738.128 353.959L807.755 381.005H809.803L811.85 381.825L809.803 386.333V388.382L779.904 456.407C765.16 490.42 765.16 529.351 779.904 563.363L809.803 631.389V635.077H808.983L739.357 662.533Z"
              fill="#1D2747"
            />
          </svg>
        </div>

        <BaseContainer>
          <div className={styles.MainAboutUs}>
            <div className={styles.MainAboutUs_Description}>
              <Waypoint onEnter={() => setFullWidth(true)}>
                <span>
                  <div
                    className={styles.FullWidth}
                    style={{ display: `${fullWidth ? 'flex' : 'none'}` }}
                  ></div>
                </span>
              </Waypoint>

              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.IconGear}
              >
                <path
                  opacity="0.6"
                  d="M30.5067 14.0991L30.5324 14.0478C30.6609 13.6881 30.8151 13.3414 30.995 13.0074L31.6117 11.5946L31.9843 10.7341C31.9972 10.5928 31.9972 10.4387 31.9843 10.2974C31.9843 9.53964 31.5989 8.84608 30.9692 8.43508L30.134 8.11399L28.6821 7.54887C28.2324 7.35621 27.8084 7.12503 27.3972 6.85531C26.5234 6.29019 25.7782 5.54525 25.2 4.67188C24.9301 4.26089 24.6989 3.83705 24.5061 3.38752L23.9793 2.02609L23.581 0.998595C23.1698 0.42063 22.4888 0.0866948 21.7821 0.0866948C21.6536 0.0738511 21.538 0.0738511 21.4095 0.0866948L20.4715 0.497692L20.3944 0.52338L18.981 0.998595C18.6084 1.16556 18.2229 1.294 17.8246 1.39675L17.7089 1.53803V1.56372L17.5547 1.60225C16.5397 1.80775 15.5117 1.80775 14.4966 1.60225L14.3425 1.56372V1.46097L14.2911 1.39675C13.8671 1.294 13.443 1.16556 13.0447 0.998595L11.6313 0.382099C11.3486 0.240819 11.0659 0.112382 10.7704 0.00963275C10.6291 -0.00321092 10.4749 -0.00321092 10.3335 0.00963275C9.57544 -0.0160546 8.85587 0.382099 8.4961 1.04997C8.35476 1.31969 8.22627 1.5894 8.12348 1.87196L7.55812 3.3233C7.36538 3.79851 7.1341 4.24804 6.86427 4.67188C6.29891 5.54525 5.55364 6.29019 4.6799 6.85531C4.25588 7.12503 3.80618 7.35621 3.33076 7.54887L1.96873 8.0883C1.96873 8.0883 1.17209 8.35802 0.927955 8.48645C0.324046 8.88461 -0.0357319 9.57817 0.0028155 10.2974C0.0028155 10.4644 0.0285177 10.6185 0.0670651 10.7855C0.182707 11.0809 0.311203 11.3634 0.452543 11.646L1.05645 13.0331C1.22349 13.4056 1.35198 13.7909 1.45477 14.189L1.59612 14.3046L1.62182 14.4202C1.84025 15.4349 1.84025 16.4752 1.62182 17.4899L1.57041 17.6954L1.48048 17.7211L1.45477 17.7467C1.33913 18.1706 1.19778 18.5816 1.00505 18.9797L0.388294 20.3925L0.0028155 21.2659C0.0028155 21.4072 0.0028155 21.5613 0.0028155 21.7026C0.0028155 22.4604 0.388301 23.1668 1.01791 23.5778L1.85309 23.8989L3.3179 24.4768C3.76762 24.6566 4.20449 24.8878 4.60281 25.1704C5.47655 25.7355 6.2218 26.4804 6.78716 27.3538C7.06984 27.7776 7.30114 28.2272 7.48102 28.7024L8.02069 30.0638L8.41901 31.0785C8.83018 31.6564 9.51117 31.9904 10.2179 31.9904C10.3335 32.0032 10.462 32.0032 10.5905 31.9904L11.5542 31.5794L12.9419 30.9629C13.3274 30.7959 13.7129 30.6675 14.1112 30.5647L14.2011 30.4363L14.4581 30.3721C15.5503 30.1537 16.6681 30.1794 17.7475 30.4363V30.5133L17.7989 30.5519C18.2101 30.6546 18.6084 30.7959 18.9938 30.9757L20.4073 31.5922C20.6899 31.7335 20.9855 31.8619 21.281 31.9647C21.4223 31.9904 21.5765 31.9904 21.7179 31.9647C22.476 31.9904 23.1827 31.5922 23.5553 30.9372C23.7609 30.5262 23.9151 30.1152 23.9151 30.1152L24.4933 28.6639C24.6732 28.2143 24.9045 27.7776 25.1871 27.3795C25.7525 26.5061 26.4977 25.7612 27.3715 25.1832C27.7827 24.9135 28.2067 24.6823 28.6564 24.4897L30.0313 23.9631C30.0313 23.9631 30.8151 23.6805 31.072 23.5521C31.676 23.1539 32.0357 22.4604 31.9972 21.7411C31.9972 21.5742 31.9586 21.4072 31.9201 21.2531C31.843 21.009 31.5346 20.3925 31.5346 20.3925L30.9821 18.9926C30.8151 18.6201 30.6866 18.2348 30.5838 17.8366L30.4553 17.7467L30.4039 17.5669C30.1726 16.4238 30.1983 15.2422 30.4938 14.1248H30.5067V14.0991ZM23.1955 20.765C22.1033 21.1888 21.2296 22.0622 20.8056 23.1539L19.9447 25.3373V25.4273L19.8547 25.3887H19.7905L17.6961 24.3869C16.6296 23.9245 15.4089 23.9245 14.3425 24.3869L12.2095 25.3245H12.1324L12.081 25.3502V25.3245L11.2201 23.1411C10.7961 22.0494 9.92236 21.176 8.83019 20.7522L6.64582 19.8916H6.55588L6.59443 19.8017V19.7247L7.51957 17.5926C7.98214 16.5266 7.98214 15.3064 7.51957 14.2404L6.58159 12.1084H6.64582L8.83019 11.235C9.96091 10.7983 10.8475 9.89926 11.2715 8.76901L12.1324 6.58559V6.54706H12.2352L14.3682 7.48465C15.4346 7.94702 16.6553 7.94702 17.7218 7.48465L19.8547 6.54706H19.919L20.767 8.69195C21.1911 9.78366 22.0648 10.657 23.157 11.0937L25.3413 11.9414H25.4056L25.4698 11.9671L25.4056 12.1084V12.1726L24.4676 14.3046C24.005 15.3707 24.005 16.5908 24.4676 17.6568L25.4056 19.7889V19.9045H25.3799L23.1955 20.765Z"
                  fill="white"
                />
              </svg>
              <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
                <p>
                  {description}
                  {/*The fund was founded by economists, software engineers and
                  creative designers combining the future of technologies and
                  finance.*/}
                </p>
              </AnimationOnScroll>
            </div>

            <div className={styles.Container}>
              <div className={styles.Statistics}>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
                  <div className={styles.Statistics_Title}>
                    <h1>
                      {titleStatistics}
                      {/*Key financial highlights of Manhattan VC*/}</h1>
                  </div>
                </AnimationOnScroll>

                <div className={styles.Statistics_Subtitle}>
                  <h3>
                    {subtitleStatistics}
                    {/*for the second quarted of 2022*/}</h3>
                </div>

                <div className={styles.Statistics_Parameters}>
                  <div className={styles.Statistics_Parameters_ParametersBlock}>
                    {parameters && parameters?.map((param, key)=>{
                      return <div className={styles.ParametersItem} key={key}>
                        <div className={styles.ParametersItem_Name}>
                          <span>{param.name}</span>
                        </div>

                        <div className={styles.ParametersItem_Value}>
                          {param.value}
                        </div>
                      </div>
                    })}

                   {/* <div className={styles.ParametersItem}>
                      <div className={styles.ParametersItem_Name}>
                        <span>VC Funds Assets</span>
                      </div>

                      <div className={styles.ParametersItem_Value}>
                        $ 191.1 M
                      </div>
                    </div>

                    <div className={styles.ParametersItem}>
                      <div className={styles.ParametersItem_Name}>
                        <span>Capital and Reserves</span>
                      </div>

                      <div className={styles.ParametersItem_Value}>
                        $ 31.9 M
                      </div>
                    </div>

                    <div className={styles.ParametersItem}>
                      <div className={styles.ParametersItem_Name}>
                        <span>Profit</span>
                      </div>

                      <div className={styles.ParametersItem_Value}>$ 1.6 M</div>
                    </div>

                    <div className={styles.ParametersItem}>
                      <div className={styles.ParametersItem_Name}>
                        <span>Operating Income</span>
                      </div>

                      <div className={styles.ParametersItem_Value}>$ 6.3 M</div>
                    </div>

                    <div className={styles.ParametersItem}>
                      <div className={styles.ParametersItem_Name}>
                        <span>Liquidity Coverage Ratio</span>
                      </div>

                      <div className={styles.ParametersItem_Value}>$ 139 %</div>
                    </div>

                    <div className={styles.ParametersItem}>
                      <div className={styles.ParametersItem_Name}>
                        <span>Capital Adequacy ratio</span>
                      </div>

                      <div className={styles.ParametersItem_Value}>
                        $ 19.36 %
                      </div>
                    </div>*/}
                  </div>

                  <div
                    className={styles.Statistics_Parameters_ImageBlock}
                    style={{
                      backgroundImage: 'url(/images/image/path_sign.png)',
                    }}
                  >
                    <Logo className={styles.ImageBlock_Logo} />
                    <div className={styles.ImageBlock_Text}>
                      <p>
                        {descriptionStatistics}
                      {/*  We are 16 years in finance and have only started our
                        journey where we invite you*/}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>

        <div className={styles.BenefitWrapper}>

          {/*<AnimationOnScroll animateIn="animate__fadeIn" animateOnce>*/}
            <div
              className={styles.MainAboutUs_SityImage}
              style={{
                backgroundImage: 'url(/images/image/main_about_us_bg.png)',
              }}
            ></div>
          {/*</AnimationOnScroll>*/}

         {/* <AnimationOnScroll
            animateIn="MainAboutUs_Bg animate__fadeIn animate__delay-1s"
            animateOnce
          >*/}
            <div className={styles.MainAboutUs_Bg}></div>
          {/*</AnimationOnScroll>*/}

          <BaseContainer>
            <div className={styles.Benefit}>
              <AnimationOnScroll
                animateIn="Benefit_Description animate__fadeInUp animate__delay-2s"
                animateOnce
              >
                <div className={styles.Benefit_Description}>
                  <BaseText>
                    <p dangerouslySetInnerHTML={{__html: benefitsDescription}}></p>
                  </BaseText>
                 {/* <BaseText>
                    Co-invest in startups. Manhattan VC Holding is the Venture
                    Capital firm build to fund its own managed startups. It
                    means that everything that you will see in our portfolio is
                    done by us and managed by our team.
                  </BaseText>{' '}
                  <br />
                  <BaseText>
                    We have created a unique network of trusted professional
                    investors, that are firms only, who support the companies
                    wich we are managing and developing.
                  </BaseText>
                  <br />
                  <BaseText>
                    Inside our network, investors can only follow up with each
                    company, see the financial data online, make reports and
                    manage their own capital 24/7/365. The modern approach to
                    finance allows us to build the unique infrastructure for our
                    startups.
                  </BaseText>*/}
                </div>
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="Benefit_Data animate__fadeIn animate__delay-1s"
                animateOnce
              >
                <div className={styles.Benefit_Data}>

                  {benefits && benefits?.map((item, key)=>{
                    return <div className={styles.DataItem} key={key}>
                      <div className={styles.DataItem_Value}>
                        <span>{item.name}</span>
                      </div>
                      <div className={styles.DataItem_Title}>
                        {item.description}
                      </div>
                    </div>
                  })}

                  {/*<div className={styles.DataItem}>
                    <div className={styles.DataItem_Value}>
                      <span>9 FinTech startups</span>
                    </div>
                    <div className={styles.DataItem_Title}>
                      in our portfolio
                    </div>
                  </div>

                  <div className={styles.DataItem}>
                    <div className={styles.DataItem_Value}>
                      <span>16 years</span>
                    </div>
                    <div className={styles.DataItem_Title}>of experience</div>
                  </div>

                  <div className={styles.DataItem}>
                    <div className={styles.DataItem_Value}>
                      <span>$ 500,000,000.00</span>
                    </div>
                    <div className={styles.DataItem_Title}>
                      porfolio valuation by the Big 4
                    </div>
                  </div>

                  <div className={styles.DataItem}>
                    <div className={styles.DataItem_Value}>
                      <span>x20</span>
                    </div>
                    <div className={styles.DataItem_Title}>
                      profit growth per annum
                    </div>
                  </div>*/}

                </div>
              </AnimationOnScroll>
            </div>
          </BaseContainer>
        </div>
      </div>
    </>
  );
};

export default MainAboutUs;
