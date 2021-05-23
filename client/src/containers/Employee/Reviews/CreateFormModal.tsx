import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Modal from "../../../component/Modal";

import Form from "../../../component/Form";

import { Theme, Size } from "../../../types";

import TextBox from "../../../component/TextBox";

import Button from "../../../component/Button";
import Input from "../../../component/InputBox";
import { IReview } from "../../../types";
import { addReview } from "../../../store/reviews/actions";

interface Props {
  review: Omit<IReview, "id">;
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

const CreateFormModal: React.FC<Props> = ({ closeModal, review }) => {
  const [newReview, setReview] = useState<Omit<IReview, "id">>(review);
  const dispatch = useDispatch();
  const handleAddReview = useCallback(() => {
    dispatch(addReview(newReview));
    window.location.reload();
  }, [newReview]);

  const handleNewReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Modal title="New Review">
      <Form>
        <FormWrapper>
          <Input
            width="80%"
            height="50px"
            style={{ borderRadius: "10px" }}
            placeholder="Reviewer id"
            themeType={Theme.Light}
            name="reviewer_id"
            value={newReview.reviewer_id}
            onChange={handleNewReviewChange}
          />
          <Input
            width="80%"
            height="50px"
            style={{ borderRadius: "10px" }}
            placeholder="Employee id"
            name="employee_id"
            value={newReview.employee_id}
            themeType={Theme.Light}
            onChange={handleNewReviewChange}
          />
          <Input
            width="80%"
            height="50px"
            style={{ borderRadius: "10px" }}
            placeholder="feedback"
            name="feedback"
            value={newReview.feedback}
            themeType={Theme.Light}
            onChange={handleNewReviewChange}
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
            placeholder="admin"
            name="is_reviewed"
            type="checkBox"
            value={newReview.is_reviewed}
            themeType={Theme.Light}
            onChange={handleNewReviewChange}
          />
          <Button
            themeType={Theme.Primary}
            buttonSizeType={Size.M}
            onClick={handleAddReview}
          >
            Add
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

export default CreateFormModal;
