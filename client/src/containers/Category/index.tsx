import React, { useCallback, useMemo, useState } from "react";
import styld from "styled-components";
import { useCategory } from "../../hooks/category";

interface Props {
  handleCategoryChange: (itemIndex: number) => () => void;
  activeItem: number;
}

const Wrapper = styld.div`
    display: flex;
    width: 100%;
    height: 30px;
    position: absolute;
    top: 20px;
    left:0;
    z-index: 999;
    background-color: #fff;
`;

const CategoryItem = styld.div<{ active: boolean }>`
  flex: 1;
  border: 1px solid black;
  background-color: ${({ active }) => (active ? "green" : "#fff")};
  cursor: pointer;
`;

const Category: React.FC<Props> = ({
  handleCategoryChange,
  activeItem,
}: Props) => {
  const { categories, loading } = useCategory();

  function renderCategories() {
    if (categories.length === 0) return null;
    if (loading) return <span>loading</span>;
    return categories.map((category, index) => (
      <CategoryItem
        key={category.ID}
        active={activeItem === index}
        onClick={handleCategoryChange(index)}
      >
        {category.name}
      </CategoryItem>
    ));
  }
  return <Wrapper>{renderCategories()}</Wrapper>;
};

export default React.memo(Category);
