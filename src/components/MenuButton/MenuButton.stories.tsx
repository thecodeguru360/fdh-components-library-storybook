
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MenuButton from './MenuButton';

export default { 
    title: 'MenuButton',
    component: MenuButton,
} as Meta<typeof MenuButton>;

const Template: StoryFn<typeof MenuButton> = (args) => <MenuButton {...args} />

export const MenuButtonOne = Template.bind({});
MenuButtonOne.args = {
    label: 'Primary Button',
    menuItems: ['Item 1', 'Item 2', 'Item 3'],
}

export const MenuButtonTwo = Template.bind({})
MenuButtonTwo.args = {
    label: 'Secondary Button',
    menuItems: ['Item 1', 'Item 2', 'Item 3'],
}

