import React, { useState } from 'react';

import Menu from '@components/Header/Menu';

import BurgerComponent from './styled';

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerComponent open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerComponent>
      <Menu open={open} />
    </>
  );
}
