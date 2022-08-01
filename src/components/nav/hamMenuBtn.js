import React from 'react';

function HamMenuBtn({ toggleOpen, Icon }) {
  return (
    <button className="md:hidden mx-6" onClick={toggleOpen}>
      {Icon}
    </button>
  );
}

export default HamMenuBtn;
