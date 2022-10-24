import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { getRandomHexColor } from 'index';

export default function FriendListItem({ avatar, name, isOnline }) {
  return <li className={css.item}>
    {isOnline === true ? <span className={css.statusGreen}></span> : <span className={css.statusRed}></span>}
  <img style={{backgroundColor: getRandomHexColor()}} className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</li>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}