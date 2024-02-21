import { Link, useNavigate } from 'react-router-dom';
import Card from 'shared/ui/components/Card/Card';
import styles from './StringCard.module.css';

type TProps = {
  keyMy: string | number;
  number: string | number;
  heading: string;
  description: string;
  to: string;
};

function StringCard({keyMy, number, heading, description, to}: TProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`./${number}`);
  };

  return (
    <Card
      keyMy={keyMy}
      heading={`№${number}: ${heading}. ${description}`}
    >
      <Link
        className={styles.link}
        to={to}
        onClick={handleClick}
      >
        {`просмотр >`}
      </Link>
    </Card>
  )
}

export default StringCard;
