import React, { PureComponent } from 'react';

import { Root, NavigationList, NavigationLink, NavigationItem } from './styles';


class Navigation extends PureComponent {
  render() {
    return (
      <Root>
        <nav>
          <NavigationList>
            <NavigationItem>
              <NavigationLink to="/">Strona Główna</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/wishlist-comments">Wyswietl ulubione</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/add-comment">Dodaj komentarz</NavigationLink>
            </NavigationItem>
          </NavigationList>
        </nav>
      </Root>
    );
  }
}

export default Navigation;
