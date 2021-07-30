import Link from 'next/link';
import classes from '../scss/tag.module.scss'

const Tag = ({tag}) => {
  return (
    <Link href="#" passHref>
      <a className={classes["tag"]}>{tag}</a>
    </Link>
  );
};

export default Tag;