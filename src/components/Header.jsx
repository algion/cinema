import React from 'react';

import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { UserIcon } from "./User";

export const Header = () => (
  <header>
      <div className="left-block">
          <Logo/>
          <Nav/>
      </div>
          <div className="right-block">
              <UserIcon/>
          </div>
          </header>
);