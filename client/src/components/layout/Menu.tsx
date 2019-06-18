import React, { Component } from 'react';

const Menu = (props: { items: Array<CKMMenuItem | CKMSubmenu> }) => {
    const { items } = props;
  
    return (
      <React.Fragment>
        {items.map((item, index) => {
          const submenu = item as CKMSubmenu;
  
          if (submenu.items != null) {
            return <Submenu key={index} submenu={submenu} />;
          } else {
            return <MenuItem key={index} item={item} />;
          }
        })}
      </React.Fragment>
    );
  };