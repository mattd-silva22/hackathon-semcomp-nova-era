import React, { useState } from "react";
import styled from "styled-components";
import Mapa from "../Mapa";
import RegisterAlertModal from "../RegisterAlertModal";
import ReportButton from "../ReportButton";
import SearchBar from "../SearchBar";

export default function MapScreen() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <MapScreenContainer>
      <SearchBar />
      <ReportButton onClick={() => setShowModal(true)} />
      <Mapa />

      <RegisterAlertModal
        requestClose={() => setShowModal(false)}
        visible={showModal}
      />
    </MapScreenContainer>
  );
}

const MapScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
  width: 100%;

  height: 100%;
`;
