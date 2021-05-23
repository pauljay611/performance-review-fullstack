import React, { useState, useMemo } from "react";
import styled from "styled-components";

import TableBox from "../../../component/TableBox";
import { Theme } from "../../../types";
import { useReviews } from "../../../hooks/useReview";
import { useUser } from "../../../hooks/useUser";
import InputBox from "../../../component/InputBox";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5% 0;
`;

const Box = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: scroll;
`;

const header = ["key", "reviewer_id", "employee_id", "feedback", "is_reviewed"];

const Employee: React.FC = () => {
  const { currentUser } = useUser();
  const [searchKey, setSearchKey] = useState("");
  const { reviews = [], loading } = useReviews({ eid: currentUser?.id });
  const data = useMemo(() => {
    if (!searchKey) {
      return reviews.map((review) => {
        return [
          review.id,
          review.reviewer_id,
          review.employee_id,
          review.feedback,
          review.is_reviewed ? "yes" : "no",
        ];
      });
    }
    return reviews
      .filter((review) => review.reviewer_id === +searchKey)
      .map((review) => {
        return [
          review.id,
          review.reviewer_id,
          review.employee_id,
          review.feedback,
          review.is_reviewed ? "yes" : "no",
        ];
      });
  }, [searchKey, reviews]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };

  if (loading) return null;

  return (
    <Wrapper>
      <Box>
        <InputBox
          width="80%"
          height="50px"
          style={{ borderRadius: "10px" }}
          placeholder="reviewer id"
          themeType={Theme.Light}
          value={searchKey}
          onChange={handleSearchChange}
        ></InputBox>
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
