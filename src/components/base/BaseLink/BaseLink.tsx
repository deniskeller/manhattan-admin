import React, {ReactNode} from 'react';
import Link from "next/link";
import styles from './style.module.scss';


interface Props {
  outer?: boolean;
  href?: string;
  onClick?: (e: React.SyntheticEvent) => void;
  children: ReactNode
}

const BaseLink: React.FC<Props> = ({
                                     href,
                                     onClick,
                                     outer,
                                     children
                                   }) => {
      if (href && href?.length > 0) {
        return <Link href={href}><span className={styles.link}>{children}</span></Link>
      }
      if (outer === true){
        return <a href={href} className={styles.link}>{children}</a>
      }
      return <span className={styles.link}>{children}</span>
  };
export default BaseLink;
