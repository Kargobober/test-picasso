import { ReactNode } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

type TProps = {
  key: string | number;
  heading: string;
  children?: ReactNode;
};

const Card = (props: TProps) => {
  return (
    <li className={styles.card} key={props.key}>
      <h4 className={styles.heading}>
        {props.heading}
      </h4>
      {props.children}
    </li>
  )
};

export default Card;
