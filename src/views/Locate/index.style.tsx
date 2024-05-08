"use client";
import styled from "styled-components";

export const LocateBodyWrapper = styled.div`
	padding: 20px;
	background-color: ${(props) => props.theme.COLORS.blueBackground};
  height: 100vh;
  .nav-bar {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40px;
		font-size: 20px;
    .location {
      font-size: 20px;
    }
	}
`;
