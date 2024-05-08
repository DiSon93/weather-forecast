/* eslint-disable @next/next/no-img-element */
import { Button, Space, DatePicker, Typography, Row, Image, Col } from "antd";
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
import { Response } from "@/lib/fadux/typings/Response";
const { Text, Link } = Typography;

import { HomeBodyWrapper } from "./index.style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAction } from "@/lib/fadux";
import { RootState } from "@/reduxes";
import React from "react";
import { useRouter } from 'next/router'

export default function Home() {
	const dispatch = useDispatch();
	const router = useRouter()
	const { res: weatherDetail } = useSelector<RootState, Response>((state) => state?.weather?.getWeatherDetail || {});
	const { res: forecastDetail } = useSelector<RootState, Response>((state) => state?.weather?.getWeatherForecast || {});

	useEffect(() => {
		dispatch(getAction("getWeatherDetail")({}));
		dispatch(getAction("getWeatherForecast")({}));
	}, [dispatch]);

	const goToRegionWeatherList = () => {
		router.push("/locates");
	}
	return (
		<HomeBodyWrapper>
			{weatherDetail && (
				<React.Fragment>
					<div className="nav-bar">
						<Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={() => goToRegionWeatherList()} />
						<div style={{ display: "block" }}>
							<div>
								{weatherDetail.location?.name}, {weatherDetail.location?.country}
							</div>
							<Text type="secondary">{weatherDetail.location?.localtime}</Text>
						</div>
						<Button type="primary" shape="circle" icon={<MoreOutlined />} />
					</div>
					<Row>
						<Col span={24} style={{ textAlign: "center" }}>
							<Image className="weather-icon" src={weatherDetail.current?.condition?.icon} alt="weather-icon" />
						</Col>
						<Col span={24} style={{ textAlign: "center", marginBottom: "30px" }}>
							<div className="temprature">{weatherDetail.current?.temp_c}&deg;C</div>
							<Space className="temp-detail">
								<Button type="primary" disabled={true}>
									{weatherDetail.current?.condition?.text}
								</Button>
								<Text type="secondary">Feels like {weatherDetail.current?.feelslike_c}&deg;C</Text>
							</Space>
						</Col>
						<Col span={24}>
							<Row>
								<Col className="weather-item" span={8}>
									<Space>
										<Image className="rain-icon" src="/icons/rain.png" alt="weather-icon" />
										<Text type="secondary">{weatherDetail.current?.cloud}%</Text>
									</Space>
									<br />
									<Text type="secondary" className="note">
										Chance of rain
									</Text>
								</Col>
								<Col className="weather-item" span={8}>
									<Space>
										<Image className="rain-icon" src="/icons/air.png" alt="weather-icon" />
										<Text type="secondary">{weatherDetail.current?.uv}</Text>
									</Space>
									<br />
									<Text type="secondary" className="note">
										Quality of air
									</Text>
								</Col>
								<Col className="weather-item" span={8}>
									<Space>
										<Image className="rain-icon" src="/icons/humid.png" alt="weather-icon" />
										<Text type="secondary">{weatherDetail.current?.humidity}%</Text>
									</Space>
									<br />
									<Text type="secondary" className="note">
										Humidity
									</Text>
								</Col>
							</Row>
						</Col>
					</Row>
					<Space className="forecast">
						<Text type="secondary">Today</Text>
						<Text type="secondary">Next 7 days </Text>
					</Space>
					{forecastDetail && (
						<Space className="forecast-item">
							{forecastDetail?.forecast?.forecastday[0].hour.map((item: any, index: number) => {
								return (
									<div className="weather-item-box" key={index}>
										<Text type="secondary" className="time">
											{item?.time.slice(-5)}
										</Text>
										<br />
										<Image src={item.condition.icon} alt="forecast" />
										<br />
										<Text type="secondary" className="time">
											{item?.temp_c}&deg;C
										</Text>
									</div>
								);
							})}
						</Space>
					)}
				</React.Fragment>
			)}
		</HomeBodyWrapper>
	);
}
