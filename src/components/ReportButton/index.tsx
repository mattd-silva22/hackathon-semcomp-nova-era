import React from "react";
import styled from "styled-components";

export default function ReportButton({ onClick }: { onClick: () => void }) {
  return (
    <ReportButtonContainer onClick={onClick}>
      <div className="content">
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.8324 18.8984L11.6762 1.32031C11.5248 1.05908 11.2636 0.929688 10.9999 0.929688C10.7362 0.929688 10.4725 1.05908 10.3236 1.32031L0.167367 18.8984C-0.132926 19.4209 0.24305 20.0703 0.843636 20.0703H21.1561C21.7567 20.0703 22.1327 19.4209 21.8324 18.8984ZM10.2186 8.15625C10.2186 8.04883 10.3065 7.96094 10.4139 7.96094H11.5858C11.6932 7.96094 11.7811 8.04883 11.7811 8.15625V12.6484C11.7811 12.7559 11.6932 12.8438 11.5858 12.8438H10.4139C10.3065 12.8438 10.2186 12.7559 10.2186 12.6484V8.15625ZM10.9999 16.75C10.6932 16.7437 10.4012 16.6175 10.1866 16.3984C9.97192 16.1793 9.85169 15.8848 9.85169 15.5781C9.85169 15.2714 9.97192 14.9769 10.1866 14.7578C10.4012 14.5387 10.6932 14.4125 10.9999 14.4062C11.3065 14.4125 11.5985 14.5387 11.8132 14.7578C12.0279 14.9769 12.1481 15.2714 12.1481 15.5781C12.1481 15.8848 12.0279 16.1793 11.8132 16.3984C11.5985 16.6175 11.3065 16.7437 10.9999 16.75Z"
            fill="#727171"
          />
        </svg>

        <span>Registrar um alerta</span>
      </div>
    </ReportButtonContainer>
  );
}

const ReportButtonContainer = styled.button`
  border: none;
  background-color: #fff;
  padding: 16px 100px;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  position: absolute;
  bottom: 16px;
  z-index: 1001;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #727171;
    font-weight: 700;
  }
`;
