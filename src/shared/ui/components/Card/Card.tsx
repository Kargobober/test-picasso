import { ReactNode } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

type TProps = {
  key?: string | number;
  heading: string;
  children?: ReactNode;
  exClassHeading?: string;
};

const Card = (props: TProps) => {
  return (
    <li className={`${styles.card} p-2`} key={props.key}>
      <h4 className={`${styles.heading} text ${props.exClassHeading}`}>
        {props.heading}
      </h4>
      {props.children}
    </li>
  )
};

export default Card;
