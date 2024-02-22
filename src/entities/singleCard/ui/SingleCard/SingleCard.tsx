import Card from 'shared/ui/components/Card/Card';
import styles from './SingleCard.module.css';

type TProps = {
  number: string | number;
  heading: string;
  description: string;
};

function SingleCard({number, heading, description}: TProps) {
  return (
    <>
      <h4>{'№' + number + ':' + ' ' + heading}</h4>
      <p>{description}</p>
    </>
  )
}

export default SingleCard;
