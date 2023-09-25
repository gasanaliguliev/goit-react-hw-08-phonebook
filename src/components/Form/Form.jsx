import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContainer,
  NameFormLabel,
  FormNameInput,
  FormSubmitBtn,
  NumberFormLabel,
  FormNumberInput,
} from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };

    const normalizedName = name.toLowerCase().trim();
    if (
      contacts !== null &&
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return toast.error(`${name} is already in contacts!`);
    }
    dispatch(addContact(contact));
    reset();
  };

  return (
    <FormContainer autoComplete="off" onSubmit={onSubmitForm}>
      <NameFormLabel htmlFor="name" />
      <FormNameInput
        label="Name"
        variant="outlined"
        size="large"
        id="name"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        onChange={e => setName(e.currentTarget.value)}
      />
      <NumberFormLabel htmlFor="number" />
      <FormNumberInput
        label="Phone number"
        variant="outlined"
        size="large"
        id="number"
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        onChange={e => setNumber(e.currentTarget.value)}
      />

      <FormSubmitBtn variant="contained" size="large" type="submit">
        Add contact
      </FormSubmitBtn>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </FormContainer>
  );
};

export default Form;
