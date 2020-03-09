import React, { FC } from 'react';
import { MyComponent } from 'component-library-react';

export const MyComponentWrapper: FC<MyComponentProps> = ({ content = 'Lorem ipsum dolor sit amet.' }) => {
    return (
        <MyComponent
          className="lovely-class"
        >
            {content}
        </MyComponent>
    );
};

export interface MyComponentProps {
    content?: string;
}
