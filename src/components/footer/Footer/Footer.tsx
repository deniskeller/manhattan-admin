import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { Logo } from '@content/index';

const links = [
  [
    { title: 'Terms & Conditions', href: '/terms_and_conditions' },
    { title: 'Cookie Policy', href: '/cookie_policy' },
    { title: 'Privacy Policy', href: '/privacy_policy' },
    { title: 'Complaints Policy', href: '/complaints_policy' },
  ],
  [
    { title: 'About Us', href: '/about_us' },
    { title: 'Contact Us', href: '/contact_us' },
    { title: 'News Room', href: '/news_room' },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Financial Data', href: '/coming_soon' },
  ],
];

const Footer = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Footer}>
          <div className={styles.Footer_Content}>
            <div className={styles.Footer_Content_Title}>
              The wealth platform for FinTech
            </div>

            <div className={styles.Footer_Content_Description}>
              <div className={styles.Footer_Content_Description_Text}>
                <span>
                  <p>
                    Manhattan VC Holding is registered in the United States of
                    America, in the State of New York and is based in NYC
                    Manhattan. We are registered for Anti-Money-Laundering
                    purposes only. We are not intended to be a substitute for
                    legal, tax or financial advice. Operating an investment
                    vehicle may be regulated in your country. We do not assist
                    with your regulation as an investment manager or by
                    conducting any other regulated activity.
                  </p>
                </span>

                <span>
                  <p>
                    Manhattan VC Holding is a trading name of Manhattan VC
                    Holding LLC, a limited liability company incorporated in the
                    United States of America (35-2753010) with its Business
                    Office address at 1330 6th Avenue, New York, Manhattan,
                    10019, United States of America.
                  </p>
                </span>
              </div>

              <ul className={styles.Footer_Content_Navbar}>
                {links?.map((link, index) => {
                  return (
                    <li className={styles.Link} key={index}>
                      <ul>
                        {link?.map((el, i) => {
                          return (
                            <li key={i}>
                              <Link href={el.href}>
                                <a>{el.title}</a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <Logo className={styles.Footer_Logo} />
        </div>

        <div className={styles.Footer_Copyright}>
          <p>
            All Rights Reserved. TM and © 2022 Manhattan VC Holding LLC. <br />{' '}
            1330 6th Avenue, New York, Manhattan, 10019, United States of
            America.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
