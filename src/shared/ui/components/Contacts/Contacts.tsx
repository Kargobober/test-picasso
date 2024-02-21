import React from 'react';
import { Link } from 'react-router-dom';

type TProps = {
  all?: boolean;
  gitHub?: boolean;
  hh?: boolean;
  habr?: boolean;
  tg?: boolean;
  mail?: boolean;
};

const Contacts = (props: TProps) => {
  return (
    <Link to='https://github.com/Kargobober' target='_blank'>Contact</Link>
  )
}

export default Contacts;
