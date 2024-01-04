import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, FormGroup, Button } from './FormAddContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

const contactsValidation = Yup.object().shape({
  name: Yup.string().min(4, 'Too Short!').required('Required'),
  phone: Yup.string().min(7, 'At least 7').required('Required'),
});

export const FormAddContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={contactsValidation}
      onSubmit={(values, actions) => {
        if (
          contacts.find(
            contact =>
              contact.name.toLowerCase() === values.name.toLowerCase() &&
              contact.phone === values.phone
          )
        ) {
          return alert(
            `${values.name} with ${values.phone} is already in contacts`
          );
        }
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form>
        <FormGroup>
          Name
          <Field type="text" name="name" placeholder="Введіть ім'я" />
        </FormGroup>
        <FormGroup>
          Phone
          <Field type="tel" name="phone" placeholder="Введіть телефон" />
          <Button type="submit">Add contact</Button>
        </FormGroup>
      </Form>
    </Formik>
  );
};
