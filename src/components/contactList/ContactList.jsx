import { ContactItem, ContsctList, DeleteBtn } from './ContactList.styled';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectError, selectVisibleContacts } from 'redux/contacts/selectors';
import { BsFillTrash3Fill } from 'react-icons/bs';

const ContactsList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const userFilteredContacts = useSelector(selectVisibleContacts);

  return (
    <ContsctList>
      {userFilteredContacts &&
        !error &&
        userFilteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <BsFillBookmarkCheckFill
                style={{ color: 'blue', marginRight: '15px' }}
              />
              {name}: {number}
              <DeleteBtn
                variant="contained"
                size="small"
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
                <BsFillTrash3Fill
                  style={{ marginLeft: '5px', paddingBottom: '5px' }}
                />
              </DeleteBtn>
            </ContactItem>
          );
        })}
    </ContsctList>
  );
};

export default ContactsList;
