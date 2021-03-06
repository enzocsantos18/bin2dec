import React, { useState } from 'react';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import Tooltip from '@material-ui/core/Tooltip';

import { MdFilterNone } from 'react-icons/md';
import { Container, Conversion } from './styles';

const schema = Yup.object().shape({
  binary: Yup.string('The value must be a sequence of zeros and ones.')
    .matches(/^[01]+$/, 'The value must be binary.')
    .required('The value must be a sequence of zeros and ones.'),
});

function Converter() {
  const notify = () => toast.success('Decimal number copied!', {});

  const [decimal, setDecimal] = useState();
  function handleSubmit(data) {
    let decimalValue = 0;
    for (let i = data.binary.length; i >= 0; i -= 1) {
      if (data.binary[i] === '1') decimalValue += 1 * 2 ** i;
      else decimalValue += 0 * 2 ** i;
    }

    setDecimal(decimalValue);
  }
  return (
    <Container>
      <h1>Binary to Decimal Converter</h1>
      <p>Type only 8 characters using only 1 and 0.</p>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          onChange={() => setDecimal()}
          name="binary"
          maxLength={8}
          placeholder="Ex: 1001001"
        />
        <button type="submit">Convert</button>
      </Form>

      {decimal != null ? (
        <Conversion>
          <h1>Result:</h1>
          <Tooltip title="Copy" enterDelay={200} leaveDelay={200}>
            <CopyToClipboard onCopy={notify} text={decimal}>
              <div>
                <p>{decimal}</p>
                <MdFilterNone size={16} />
              </div>
            </CopyToClipboard>
          </Tooltip>
        </Conversion>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default Converter;
