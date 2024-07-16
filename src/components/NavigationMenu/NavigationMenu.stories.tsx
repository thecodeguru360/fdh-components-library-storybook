// src/stories/Navigation.stories.tsx

import React from 'react';
import {  Meta, StoryFn } from '@storybook/react';
import NavigationMenu from './NavigationMenu';

export default { 
    title: 'NavigationMenu',
    component: NavigationMenu,
} as Meta<typeof NavigationMenu>;

const Template: StoryFn<typeof NavigationMenu> = (args) => <NavigationMenu {...args} />

export const PrimaryMenu = Template.bind({});
PrimaryMenu.args = {
  menuItems: [
    {
      label: 'Home',
      
    },
    {
      label: 'Products',
      subMenuItems: ['Product 1', 'Product 2', 'Product 3'],
    },
    {
      label: 'About',
      subMenuItems: ['Mission', 'History', 'Team'],
    },
    {
      label: 'Contact',
    },
  ]
};

