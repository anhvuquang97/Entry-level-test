import { FC } from "react";
import { Card, Image } from "antd";
import { Session } from "@/interfaces";

interface Props {
  data: Session;
}

const formulateDate = (dateString: string) => {
  const dateObject = new Date(dateString);
  const date = dateObject.getDate();
  const month = dateObject.toLocaleString("default", { month: "short" });

  return date + " " + month;
};

const ItemCard: FC<Props> = ({ data }) => {
  const displayTitle = data?.program?.[0]?.display_title;
  const thumbnailUrl = data?.program?.[0]?.thumbnail_img_url;

  return (
    <Card style={{ width: "100%", height: "400px" }}>
      <Image
        width="100%"
        height={240}
        src={thumbnailUrl}
        alt={displayTitle}
        loading="lazy"
      />
      <h4>{displayTitle}</h4>
      <p>
        {formulateDate(data?.start_date)} - {formulateDate(data?.end_date)}
      </p>
    </Card>
  );
};

export default ItemCard;
