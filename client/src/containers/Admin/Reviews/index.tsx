import React from "react";
import { useReview } from "../../../hooks/review";

const Reveiws: React.FC = () => {
  const { reviews } = useReview();
  return <div>review</div>;
};

export default Reveiws;
