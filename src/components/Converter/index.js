import React from 'react';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

const schema = Yup.object().shape({
  binary: Yup.string('The value must be a sequence of zeros and ones.')
    .matches(/^[01]+$/, 'The value must be binary.')
    .required('The value must be a sequence of zeros and ones.'),
});

function Converter() {
  function handleSubmit(data) {}
  return (
    <Container>
      <h1>Binary to Decimal Converter</h1>
      <p>Type only 8 characters using only 1 and 0.</p>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="binary" maxLength={8} placeholder="Ex: 1001001" />
        <button type="submit">Convert</button>
      </Form>
    </Container>
  );
}

export default Converter;
