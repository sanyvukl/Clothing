import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;
    align-items: center;
    .arrow {
      cursor: pointer;
      user-select: none;
    }
    .value {
      margin: 0 10px;
    }
  }
`;
export const CheckoutImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
    margin-bottom: 2px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
`;
export const RemoveButton = styled.div`
    padding-left: 12px;
    user-select: none;
    cursor: pointer;
`;
