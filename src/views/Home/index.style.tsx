"use client";
import styled from "styled-components";

export const HomeBodyWrapper = styled.div`
	padding: 20px;
	background-color: ${(props) => props.theme.COLORS.blueBackground};
  height: 100vh;
	.nav-bar {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40px;
		font-size: 20px;
	}
	.weather-icon {
		width: 100px;
	}
	.temprature {
		font-size: 100px;
		font-weight: 1000;
		background: -webkit-linear-gradient(#eee, #0e46a3);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-bottom: 40px;
	}
	.temp-detail .ant-typography {
		font-size: 18px;
	}
	.rain-icon {
		width: 30px;
	}
	.weather-item {
    text-align: center;
    margin-top: 20px;
		.note {
			margin-top: 20px;
		}
	}
  .forecast {
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;
  }
  .forecast-item {
    margin-top: 30px;
    display: flex;
    overflow-x: auto;
    .weather-item-box {
      width: 100px;
      border-radius: 20%;
      background-color: #9AC8CD;
      height: 160px;
      padding: 10px;
      text-align: center;
      .time {
        color: ${(props) => props.theme.COLORS.whiteText};
        text-align: center;
        font-size: 20px;
      }
    }
  }
`;
