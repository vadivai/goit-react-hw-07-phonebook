import { useDispatch } from 'react-redux';
import { LiItem } from './ContactsItem.styled';
import { deleteContact } from '../../redux/operations';

export const ContactsItem = ({ item: { id, name, phone } }) => {
  const dispatch = useDispatch();
  console.log('item phone', phone);
  return (
    <LiItem>
      <span>
        {name} {phone}
      </span>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </LiItem>
  );
};
