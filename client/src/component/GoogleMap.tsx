import React from "react";
import GoogleMapReact from "google-map-react";
import styld from "styled-components";

import { IStore } from "../types";

interface Props {
  stores: IStore[];
  currentPosition: { lat: number; lng: number };
  handleZoomChange: (val: number) => void;
  handleMarkerClick: (key: number, childProps: StoreMarkerProps) => void;
  showInfoID?: number;
  defaultZoom: number;
}

interface MarkerProps {
  lat: number;
  lng: number;
}

export interface StoreMarkerProps extends MarkerProps {
  text: string;
  showInfo: boolean;
  description: string;
}

const Wrapper = styld.div`
    width: 100%;
    height: 100%;
`;

const MarkerWrapper = styld.div`
  position: relative;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background-color: red;
  transform: translate(-50%, -50%);
`;

const CenterWrapper = styld.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  opacity: 0.3;
  border-radius: 50%;
  background-color: red;
  transform: translate(-50%, -50%);
`;

const Center = styld.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: blue;
`;

const MarkerInfo = styld.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 30px;
  left: 30px;
  background-color: #fff;
`;

const Marker: React.FC<StoreMarkerProps> = ({
  text,
  showInfo,
  description,
}) => {
  function renderInfo() {
    if (!showInfo) return null;
    return <MarkerInfo>{description}</MarkerInfo>;
  }
  return (
    <MarkerWrapper>
      {text}
      {renderInfo()}
    </MarkerWrapper>
  );
};

const CenterMarker: React.FC<MarkerProps> = () => {
  return (
    <CenterWrapper>
      <Center />
    </CenterWrapper>
  );
};

const Map: React.FC<Props> = ({
  stores,
  currentPosition,
  handleZoomChange,
  handleMarkerClick,
  showInfoID = 0,
  defaultZoom,
}) => {
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAP_KEY ?? "",
        }}
        defaultZoom={defaultZoom}
        center={currentPosition}
        onZoomAnimationEnd={handleZoomChange}
        onChildClick={handleMarkerClick}
      >
        <CenterMarker {...currentPosition} />
        {stores.map(({ ID, lat, lng, name, description }) => (
          <Marker
            key={ID}
            lat={lat}
            lng={lng}
            text={name}
            showInfo={+showInfoID === ID}
            description={description}
          />
        ))}
      </GoogleMapReact>
    </Wrapper>
  );
};

export default Map;
