import Card from 'shared/ui/components/Card/Card';
import styles from './StringCard.module.css';

type TProps = {
  number: string | number;
  heading: string;
  description: string;
};

function SingleCard({number, heading, description}: TProps) {
  return (
    <Card
      heading={`${number} ${heading} ${description}`}
    />
  )
}

export default SingleCard;
