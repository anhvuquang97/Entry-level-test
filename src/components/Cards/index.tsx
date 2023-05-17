import { FC } from "react";
import { Row, Col, Spin, Empty } from "antd";
import { Session } from "@/interfaces";
import Card from "../Card";
import styles from "@/styles/Cards.module.css";

interface Props {
  data: Session[];
  isLoading?: boolean;
}

export const Cards: FC<Props> = ({ data, isLoading }) => {
  return (
    <section className={styles.cards}>
      <Spin spinning={isLoading}>
        {data?.length ? (
          <Row gutter={[32, 32]}>
            {data.map((content: Session) => {
              return (
                <Col xs={24} sm={12} md={8} xxl={6} key={content?.id}>
                  <Card data={content} />
                </Col>
              );
            })}
          </Row>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </Spin>
    </section>
  );
};

export default Cards;
