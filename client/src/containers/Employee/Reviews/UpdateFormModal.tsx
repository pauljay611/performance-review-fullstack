import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Modal from "../../../component/Modal";

import Form from "../../../component/Form";

import { Theme, Size, IReview } from "../../../types";

import TextBox from "../../../component/TextBox";

import Button from "../../../component/Button";
import Input from "../../../component/InputBox";
import { updateReview } from "../../../store/reviews/actions";

interface Props {
  review: IReview;
  closeModal: () => void;
}

const FormWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 5% 5%;
`;

const UpdateFormModal: React.FC<Props> = ({ review, closeModal }) => {
  const [updatedReview, setUpdatedReview] = useState<IReview>(review);
  const dispatch = useDispatch();

  const handleUpdateReview = useCallback(() => {
    dispatch(updateReview({ id: review.id, body: updatedReview }));
    window.location.reload();
  }, [updatedReview]);

  const handleUpdateReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedReview((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Modal title="Update Review">
      <Form>
        <FormWrapper>
          <Input
            width="80%"
            height="50px"
            style={{ borderRadius: "10px" }}
            placeholder="ID"
            themeType={Theme.Light}
            name="id"
            value={updatedReview.id}
            disabled
          />
          <Input
            width="80%"
            height="50px"
            style={{ borderRadius: "10px" }}
            placeholder="Reviewer id"
            themeType={Theme.Light}
            name="reviewer_id"
            disabled
            value={updatedReview.reviewer_id}
            onChange={handleUpdateReviewChange}
          />
          <Input
            width="80%"
            height="50px"
            style={{ borderRadius: "10px" }}
            placeholder="Employee id"
            name="employee_id"
            disabled
            value={updatedReview.employee_id}
            themeType={Theme.Light}
            onChange={handleUpdateReviewChange}
          />
          <Input
            width="80%"
            height="50px"
            style={{ borderRadius: "10px" }}
            placeholder="feedback"
            name="feedback"
            value={updatedReview.feedback}
            themeType={Theme.Light}
            onChange={handleUpdateReviewChange}
          />
          <TextBox
            style={{ width: "80%", textAlign: "center" }}
            sizeType={Size.S}
          >
            Is Reviewed ????
          </TextBox>
          <Input
            width="80%"
            height="20px"
            style={{ borderRadius: "10px" }}
            placeholder="is reviewed"
            name="is_reviewed"
            type="checkBox"
            value={updatedReview.is_reviewed}
            themeType={Theme.Light}
            onChange={handleUpdateReviewChange}
          />
          <Button
            themeType={Theme.Primary}
            buttonSizeType={Size.M}
            onClick={handleUpdateReview}
          >
            Update
          </Button>
          <Button
            themeType={Theme.Dangerous}
            buttonSizeType={Size.M}
            onClick={closeModal}
          >
            Close
          </Button>
        </FormWrapper>
      </Form>
    </Modal>
  );
};

export default UpdateFormModal;
