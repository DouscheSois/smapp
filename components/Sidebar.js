import styled from "styled-components";

const One = styled.div`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  position: fixed;

  @media (min-width: 640px) {
    display: flex;
  }
  @media (min-width: 1280px) {
    align-items: flex-start;
    width: -340px;
  }
`;

const Sidebar = () => {
  return <One>Sidebar</One>;
};

export default Sidebar;
