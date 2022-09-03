import React from "react";
import styled from "styled-components";

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <div className="content">
        <span>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z" stroke="#727171" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>

        <input type="text" placeholder="" />
      </div>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  position: absolute;
  top: 16px;
  margin: auto;

  background-color: #fff;
  padding: 16px 18px;
  max-width: 342px;

  backdrop-filter: blur(12px);

  /* Note: backdrop-filter has minimal browser support */
  border-radius: 8px;
  z-index: 1001;

  .content {
    display: flex;
    gap: 18px;
  }

  input {
    border: none;
    font-size: 14px;
    width: 220px;
    @media(max-width:420px){
      svg {
        width: 16px;
        height: 16px;
      }
      width: 150px;
    }
    &:focus {
      border: none;
    }
  }
`;
