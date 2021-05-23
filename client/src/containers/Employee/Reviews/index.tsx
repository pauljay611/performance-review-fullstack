import React from "react";
import styled from "styled-components";

import TableBox from "../../../component/TableBox";
import { Theme } from "../../../types";
import { useReviews } from "../../../hooks/review";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5% 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: "relative";
`;

const header = ["key", "reviewer_id", "employee_id", "feedback", "is_reviewed"];

const Employee: React.FC = () => {
  const { reviews = [], loading } = useReviews();

  const data = reviews.map((review) => {
    return [
      review.id,
      review.reviewer_id,
      review.employee_id,
      review.feedback,
      review.is_reviewed ? "yes" : "no",
    ];
  });

  if (loading) return null;

  return (
    <Wrapper>
      <Box>
        <TableBox
          width="80%"
          height="100%"
          data={data}
          header={header}
          themeType={Theme.Main}
          tHeight="60px"
        />
      </Box>
    </Wrapper>
  );
};

export default Employee;
