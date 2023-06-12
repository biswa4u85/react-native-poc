import * as React from 'react'
import { Icon } from 'native-base';
import { Images, Styles, Color } from "@common";

const TabBarIcon = (name: any) => ({ tintColor }: any) => (
  <Icon  type={'Ionicons'}
    style={{ backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={24}
  />
);

export default TabBarIcon;