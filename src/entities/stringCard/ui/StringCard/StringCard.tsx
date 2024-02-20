import { Link, useNavigate } from 'react-router-dom';
import Card from 'shared/ui/components/Card/Card';
import styles from './StringCard.module.css';
import { useDispatch } from 'shared/model/hooks';
import { actions } from '../../model/slice';

type TProps = {
  key: string | number;
  number: string | number;
  heading: string;
  description: string;
  to: string;
};

function StringCard({key, number, heading, description, to}: TProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(actions.setCard({
      number: Number(number),
      heading,
      description
    }));

    navigate(`./${number}`);
  };

  return (
    <Card
      key={key}
      heading={`${number} ${heading} ${description}`}
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
