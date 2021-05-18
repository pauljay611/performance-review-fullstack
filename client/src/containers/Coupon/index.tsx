import React from "react";
import styld from "styled-components";
import { useCoupons } from "../../hooks/coupon";

interface Props {}

const Wrapper = styld.div`
    display:flex;
    width: 100%;
    height: 200px;
    margin-bottom: 2%;
    border: 1px solid black;
`;

const ConponBlock = styld.div`
    width: 100px;
`;

const Coupon: React.FC<Props> = () => {
  const { coupons, loading } = useCoupons();

  function renderCoupons() {
    if (coupons.length === 0) return null;
    if (loading) return <span>loading</span>;
    return coupons.map((coupon) => (
      <ConponBlock key={coupon.ID}>{coupon.name}</ConponBlock>
    ));
  }

  return <Wrapper>{renderCoupons()}</Wrapper>;
};

export default Coupon;
