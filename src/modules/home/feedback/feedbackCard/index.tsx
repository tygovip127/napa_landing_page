import { Avatar, Card, Image } from "antd";
import "./style.scss";
import { Feedback } from "../../../../types/card";
import Text from "../../../../components/text";

const { Meta } = Card;

type Props = {
  item: Feedback;
  className?: string;
  onClick?: () => void;
  isMobile?: boolean;
};
const FeedbackCard = ({ item, className, onClick, isMobile }: Props) => {
  return (
    <Card
      onClick={onClick}
      hoverable
      bordered={false}
      className={`${className ? `feedback-card ${className}` : "feedback-card"}`}
      style={{ borderRadius: 20, height: "100%" }}
    >
      <div className="feedback-card__header">
        <Image preview={false} src={item.logo} />
      </div>
      <div className="feedback-card__bottom">
        <div className="feedback-card__body">
          <Text size={isMobile ? "16" : "24"}>{item.content}</Text>
        </div>
        <div className="feedback-card__footer">
          <Meta
            avatar={<Avatar src={item.avatar} size={64} />}
            title={item.name}
            description={item.position}
          />
        </div>
      </div>
    </Card>
  );
};
export default FeedbackCard;
