import { Col, Flex, Row, Typography } from "antd";
import "./style.css";

import ArticleCard from "./articleCard";
import Link from "../../../components/link";
import { ARTICLES } from "../../../mocks/articles";
import { useDevice } from "../../../hooks/useDevice";

const { Title, Text } = Typography;

const Article = () => {
  const { isMobile } = useDevice();

  return (
    <Flex
      className={
        isMobile ? "container container--mobile article" : "container article"
      }
      vertical
    >
      <Flex justify={isMobile ? "center" : "space-between"} align="center" wrap>
        <Title level={isMobile ? 5 : 2}>Articles by Collectors</Title>
        <Link className="link-dark-red py-0">
          <Flex justify="center" align="center">
            <Text className="px-0 py-16 text-dark-red article__text-16">
              More Articles
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-5 -5 24 24"
              width="24"
              fill="currentColor"
            >
              <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"></path>
            </svg>
          </Flex>
        </Link>
      </Flex>
      <Row gutter={[24, 24]} className={isMobile ? "mt-32" : "mt-80"}>
        {ARTICLES.map((item, i) => (
          <Col xs={24} sm={24} md={24} lg={6} xl={6} key={i}>
            <ArticleCard item={item} isMobile={isMobile} />
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default Article;