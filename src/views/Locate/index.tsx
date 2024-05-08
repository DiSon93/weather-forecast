import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAction } from "@/lib/fadux";
import { RootState } from "@/reduxes";
import { LocateBodyWrapper } from "./index.style";
import React from "react";
import { Button, Space, DatePicker, Typography, Row, Image, Col } from "antd";
import { LeftOutlined } from "@ant-design/icons";
const { Text, Link } = Typography;
import { useRouter } from 'next/router'

export default function Locate() {
	const dispatch = useDispatch();
  const router= useRouter();

  useEffect(() => {
  }, []);

  const goBackToPreviousPage = () => {
    router.back();
  }
	return (
		<LocateBodyWrapper>
			<React.Fragment>
				<div className="nav-bar">
					<Button type="primary" shape="circle" icon={<LeftOutlined />} onClick={() => goBackToPreviousPage()} />
					<div style={{ display: "block" }}>
						<Text type="secondary" className="location">Manage cities</Text>
					</div>
					<Button type="primary" disabled />
				</div>
			</React.Fragment>
		</LocateBodyWrapper>
	);
}
