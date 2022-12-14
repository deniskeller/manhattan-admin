import React, { useEffect } from 'react';
import styles from './Navbar.module.scss';
import { NavbarLink } from '@nav/index';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { Logo } from '@content/index';
import { useRouter } from 'next/router';

interface Props {}

interface Links {
  [key: string]: string;
}

const links: Links[] = [
  {
    href: '/about_us',
    title: 'About Us',
  },
  {
    href: '/contact_us',
    title: 'Contact Us',
  },
  {
    href: '/news_room',
    title: 'News Room',
  },
  {
    href: '/portfolio',
    title: 'Portfolio',
  },
  {
    href: '/coming_soon',
    title: 'Financial Data',
  },
  {
    href: '/app/admin/forms',
    title: 'Admin',
  },
  {
    href: '/app/user/profile',
    title: 'User',
  },
];

const Navbar: React.FC<Props> = () => {
  const [visible, setVisible] = React.useState(false);
  const thisDrawer = React.useRef<HTMLDivElement>(null);

  const clickOutsideHandler = () => {
    setVisible(false);
  };
  useOnClickOutside(thisDrawer, clickOutsideHandler);

  const router = useRouter();

  useEffect(() => {
    //Закрываем меню по нажатию Esc
    function onKeyDown(event: any) {
      if (event.keyCode === 27) {
        setVisible(false);
      }
    }

    const documentWidth = document.documentElement.clientWidth;
    const windowsWidth = window.innerWidth;
    const scrollbarWidth = windowsWidth - documentWidth;

    if (visible) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.body.style.position = 'fixed';

      //добавляем ширину скрола
      document.body.style.paddingRight = scrollbarWidth + 'px';
      document.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = 'relative';
      //убираем ширину скрола
      document.body.style.paddingRight = '0px';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [visible]);

  return (
    <div
      className={styles.Container}
      style={{
        background:
          router.pathname == `${'/portfolio/[id]'}`
            ? 'rgba(6, 8, 18, 0.7)'
            : 'none',
      }}
    >
      <div className="animate__animated animate__fadeInDown animate__delay-3s">
        <div className={styles.Navbar}>
          <Logo />
        </div>

        <div className={styles.Drawer} ref={thisDrawer}>
          <div
            className={`${styles.Burger} ${
              visible ? styles.Active : styles.NotActive
            }`}
            onClick={() => setVisible(!visible)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={`${styles.NavbarNav} ${
              visible ? styles.NavbarNav_Visible : ''
            }`}
          >
            {links.map((link, index) => {
              return (
                <NavbarLink
                  href={link.href}
                  title={link.title}
                  index={index}
                  key={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
