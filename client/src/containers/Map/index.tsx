import React, { useCallback, useEffect, useState } from "react";
import styld from "styled-components";
import throttle from "lodash.throttle";
import debounce from "lodash.debounce";

import Category from "../Category";
import { useStores } from "../../hooks/store";

import GoogleMap from "../../component/GoogleMap";
import { useCategory } from "../../hooks/category";
import { useCoupons } from "../../hooks/coupon";

interface Props {}

const Wrapper = styld.div`
    width: 100%;
    height: 400px;
    position: relative;
    border: 1px solid black;
`;

function calcRange(val: number) {
  return 2.5 / val;
}

const initialZoom = 8;

const Map: React.FC<Props> = (props: Props) => {
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  }>();

  const [range, setRange] = useState<number>(calcRange(initialZoom));

  const [showInfoID, setShowInfoID] = useState<number>();

  const [activeItem, setActiveItem] = useState<number>(0);

  const [defaultZoom, setDefaultZoom] = useState<number>(initialZoom);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.watchPosition(
      throttle(({ coords }) => {
        if (
          coords.latitude === currentPosition?.lat &&
          coords.longitude === currentPosition?.lng
        )
          return;
        setCurrentPosition({ lat: coords.latitude, lng: coords.longitude });
      }, 3000)
    );
  }, [currentPosition]);

  const {
    currentCategoryID,
    categories,
    loading: categoryLoading,
    setCurrentCategoryID,
  } = useCategory();

  const { stores, loading } = useStores({
    range,
    location: currentPosition,
    category: currentCategoryID,
  });

  const { getCoupons } = useCoupons();

  const handleZoomChange = useCallback(
    debounce((val) => {
      setRange(calcRange(val));
      setDefaultZoom(val);
    }, 1000),
    []
  );

  const handleMarkerClick = useCallback(
    (index: number) => {
      setShowInfoID(index);
      getCoupons(index);
    },
    [stores]
  );

  const handleCategoryChange = useCallback(
    (itemIndex: number) => () => {
      setCurrentCategoryID(categories[itemIndex].ID);
      setActiveItem(itemIndex);
      setShowInfoID(undefined);
    },
    [categories]
  );

  const renderMap = useCallback(() => {
    if (loading || !currentPosition || categoryLoading)
      return <span>loading</span>;
    return (
      <GoogleMap
        defaultZoom={defaultZoom}
        stores={stores}
        currentPosition={currentPosition}
        handleZoomChange={handleZoomChange}
        handleMarkerClick={handleMarkerClick}
        showInfoID={showInfoID}
      />
    );
  }, [currentPosition, stores, categoryLoading, loading, showInfoID]);

  return (
    <Wrapper>
      <Category
        handleCategoryChange={handleCategoryChange}
        activeItem={activeItem}
      />
      {renderMap()}
    </Wrapper>
  );
};

export default Map;
