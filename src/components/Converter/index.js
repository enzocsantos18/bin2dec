import React, { useState } from 'react';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

import { MdFilterNone } from 'react-icons/md';
import { Container, Conversion } from './styles';

const schema = Yup.object().shape({
  binary: Yup.string('The value must be a sequence of zeros and ones.')
    .matches(/^[01]+$/, 'The value must be binary.')
    .required('The value must be a sequence of zeros and ones.'),
});

function Converter() {
  const notify = () => toast('Decimal number copied!');

  const [decimal, setDecimal] = useState(5);
  function handleSubmit(data) {}
  return (
    <Container>
      <h1>Binary to Decimal Converter</h1>
      <p>Type only 8 characters using only 1 and 0.</p>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="binary" maxLength={8} placeholder="Ex: 1001001" />
        <button type="submit">Convert</button>
      </Form>
      <CopyToClipboard onCopy={notify} text={decimal}>
        <Conversion>
          <h1>Result:</h1>

          <div>
            <p>{decimal}</p>
            <MdFilterNone size={16} />
          </div>
        </Conversion>
      </CopyToClipboard>
    </Container>
  );
}

export default Converter;
