import React, { useState } from "react";
import styled from "styled-components";

import TableBox from "../../../component/TableBox";
import Button from "../../../component/Button";
import { Size, Theme, IReview } from "../../../types";
import { useReviews } from "../../../hooks/useReview";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../../store/reviews/actions";
import UpdateFormModal from "./UpdateFormModal";
import CreateFormModal from "./CreateFormModal";
import Alert from "../../../component/Alert";
import { usePageGuard } from "../../../hooks/usePageGuard";

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

const header = [
  "key",
  "reviewer_id",
  "employee_id",
  "feedback",
  "is_reviewed",
  "update",
  "delete",
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

const TableDeleteButton: React.FC<TableProps> = ({ theme, text, review }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setOpen(true);
  };

  const confirm = () => {
    dispatch(deleteReview({ id: review.id }));
    // window.location.reload();
  };

  function renderUpdateModal() {
    if (!open) return null;
    return (
      <Alert message={`Delete Review ${review.id} ??`} confirm={confirm} />
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {renderUpdateModal()}
      <Button buttonSizeType={Size.M} themeType={theme} onClick={openModal}>
        {text}
      </Button>
    </div>
  );
};

const newDefaultReview: Omit<IReview, "id"> = {
  reviewer_id: 0,
  employee_id: 0,
  feedback: "",
  is_reviewed: false,
};

const Employee: React.FC = () => {
  const [openNew, setOpenNew] = useState(false);
  const { reviews = [], loading } = useReviews({});
  usePageGuard();
  const data = reviews.map((review) => {
    return [
      review.id,
      review.reviewer_id,
      review.employee_id,
      review.feedback,
      review.is_reviewed ? "yes" : "no",
      <TableUpdateButton theme={Theme.Warning} text="update" review={review} />,
      <TableDeleteButton
        theme={Theme.Dangerous}
        text="delete"
        review={review}
      />,
    ];
  });

  const closeNewModal = () => {
    setOpenNew(false);
  };

  const openNewModal = () => {
    setOpenNew(true);
  };

  function renderCreateModal() {
    if (!openNew) return null;
    return (
      <CreateFormModal review={newDefaultReview} closeModal={closeNewModal} />
    );
  }

  if (loading) return null;

  return (
    <Wrapper>
      {renderCreateModal()}
      <Box>
        <TableBox
          width="80%"
          height="100%"
          data={data}
          header={header}
          themeType={Theme.Main}
          tHeight="60px"
        />
        <Button
          themeType={Theme.Primary}
          buttonSizeType={Size.S}
          sizeType={Size.M}
          style={{
            position: "absolute",
            bottom: "100px",
            right: "10%",
            borderRadius: "50%",
          }}
          onClick={openNewModal}
        >
          +
        </Button>
      </Box>
    </Wrapper>
  );
};

export default Employee;
