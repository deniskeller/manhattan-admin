//@ts-nocheck
import React, { useRef, useState } from 'react';
import styles from './MapContacts.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  InfoWindowF,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

/*const center = {
  lat: 40.76210561590526,
  lng: -73.97843847116481,
};*/
type Props = {
  lat: number,
  lng: number,
  address: string,
}
const MapContacts: React.FC<Props> = ({lat, lng, address}) => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP;
  const [popupOpen, setPopupOpen] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC9ofxwIKyzFAYZiDL4l7Xg9SdPqKGqRjg',
  });
  const mapRef = useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback() {
    mapRef.current = undefined;
  }, []);
  const center = {
    lat, lng
  }

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <MarkerF
            onLoad={onLoad}
            onClick={() => {
              setPopupOpen(true);
            }}
            position={center}
            icon={{
              url: '/images/icon/Frame.svg',
            }}
          >
            {popupOpen ? (
              <InfoWindowF onCloseClick={() => setPopupOpen(false)}>
                <div>
                  {address}
                  {/*1330 6th Avenue, New York, Manhattan, 10019, United States of
                  Americ*/}
                </div>
              </InfoWindowF>
            ) : null}
          </MarkerF>

          {/* <div className={styles.Marker}>
      <BaseIcon icon={ALL_ICONS.GEAR_COLOR_ICON} viewBox="0 0 91 91" />
    </div> */}
        </GoogleMap>
      ) : (
        'Loading map'
      )}
    </>
  );
};

export default MapContacts;
