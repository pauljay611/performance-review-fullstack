import React, { useState, useMemo } from "react";
import styled from "styled-components";

import TableBox from "../../../component/TableBox";
import { Theme, IReview, Size } from "../../../types";
import { useReviews } from "../../../hooks/useReview";
import { useUser } from "../../../hooks/useUser";
import UpdateFormModal from "./UpdateFormModal";
import Button from "../../../component/Button";
import { usePageGuard } from "../../../hooks/usePageGuard";
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

const header = [
  "key",
  "reviewer_id",
  "employee_id",
  "feedback",
  "is_reviewed",
  "review",
];

interface TableProps {
  theme: Theme;
  text: string;
  review: IReview;
}

const TableUpdateButton: React.FC<TableProps> = ({ theme, text, review }) => {
  const [openUpdate, setOpenUpdate] = useState(false);

  const openUpdateModal = () => {
    setOpenUpdate(true);
  };

  const closeUpdateModal = () => {
    setOpenUpdate(false);
  };

  function renderUpdateModal() {
    if (!openUpdate) return null;
    return <UpdateFormModal review={review} closeModal={closeUpdateModal} />;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {renderUpdateModal()}
      <Button
        buttonSizeType={Size.M}
        themeType={theme}
        onClick={openUpdateModal}
      >
        {text}
      </Button>
    </div>
  );
};

const Employee: React.FC = () => {
  const { currentUser } = useUser();
  const [searchKey, setSearchKey] = useState("");
  const { reviews = [], loading } = useReviews({ rid: currentUser?.id });

  const data = useMemo(() => {
    if (!searchKey) {
      return reviews.map((review) => {
        return [
          review.id,
          review.reviewer_id,
          review.employee_id,
          review.feedback,
          review.is_reviewed ? "yes" : "no",
          <TableUpdateButton
            theme={Theme.Warning}
            text="update"
            review={review}
          />,
        ];
      });
    }
    return reviews
      .filter((review) => review.employee_id === +searchKey)
      .map((review) => {
        return [
          review.id,
          review.reviewer_id,
          review.employee_id,
          review.feedback,
          review.is_reviewed ? "yes" : "no",
          <TableUpdateButton
            theme={Theme.Warning}
            text="update"
            review={review}
          />,
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
          placeholder="employee id"
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
