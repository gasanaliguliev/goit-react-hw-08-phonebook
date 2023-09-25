import { ContactListTitle, Container, Title } from 'components/App/App.styled';
import ContactsList from 'components/contactList/ContactList';
import { SetError } from 'components/Error/Error';
import Filter from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Form />
        {contacts.length !== 0 && (
          <>
            <ContactListTitle> Contacts list</ContactListTitle>
            <Filter />
            <ContactsList />
          </>
        )}

        <SetError />
      </Container>
    </>
  );
};

export default ContactsPage;
