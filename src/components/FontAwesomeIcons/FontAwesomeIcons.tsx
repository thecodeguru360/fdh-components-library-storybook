import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
    IconProp,
    SizeProp
} from '@fortawesome/fontawesome-svg-core'

export type IconProps = {
    iconType?: string;
    iconName: IconProp;
    parentClasses?: string;
    iconClasses?: string;
    iconSize?: SizeProp;
    handleClick?: Function;
}

export const FontAwesomeIcons = ({
    iconName,
    parentClasses,
    iconClasses,
    iconSize,
    handleClick
}: IconProps) => {

    return (
        <>
            <div className={parentClasses}>
                <FontAwesomeIcon
                    icon={iconName}
                    size={iconSize || '1x'}
                    className={iconClasses}
                    onClick={() => handleClick && handleClick()}
                />
            </div>
        </>
    )
}

export default FontAwesomeIcons;