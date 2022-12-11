import { MapContacts } from '@content/index';
import React from 'react';
import styles from './ContactUsMap.module.scss';
import {TContactMap} from "@content/Editor/plugins/ContuctUsMap";

const ContactUsMap: React.FC<TContactMap> = ({titleForm, subtitle,
                                               address, workingHours,
                                               lat, lng}) => {
  return (
    <>
      <div className={styles.ContactUsMap}>
        <div className={styles.ContactUsMap_Address}>
          <div className={styles.Info}>
            <div className={styles.Info_Name}>{titleForm} {/*Manhattan VC Holding LLC*/}</div>
            <div className={styles.Info_EIN}>{subtitle }{/*EIN 35-2753010*/}</div>
          </div>

          <div className={styles.Address}>
            <div className={styles.Address_Name}>
              <span>Office address at</span>
              <br />
              {address}
              {/*1330 6th Avenue, New York, Manhattan, 10019, United States
              of America*/}
            </div>
            <div className={styles.Address_WorkingHours}>
              <span>Working hours</span>
              <br />
              {workingHours}
              {/*9:00 AM - 16:00 PM by NY time (GMT-4)*/}.
            </div>
          </div>
        </div>

        <div className={styles.ContactUsMap_Map}>
          <MapContacts lat={lat} lng={lng} address={address}/>
        </div>
      </div>
    </>
  );
};

export default ContactUsMap;
