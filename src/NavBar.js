import React from 'react';
import { Link } from '@reach/router';
import { css } from '@emotion/core';
import colors from './colors';

// const spin = keyframes`
//   to {
//     transform: rotate(360deg);
//   }
// `;

const NavBar = () => {
  return (
    <header
      css={css`
        background-color: ${colors.secondary};
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          &:hover {
            text-decoration: underline;
          }
        `}
        role="img"
        arila-label="logo"
      >
        :poodle:
      </span>
    </header>
  );
};

export default NavBar;
