import React from 'react';

import { ImageSettings } from './ImageSettings';

import { Resizer } from '../Resizer';
const defaultProps = {
  src: '',
  alt: 'Image',
  width: '100px',
  height: '100px',
};
export const Image = ({
  width,
  height,
  src,
  srcSet,
  ...props
}: React.ImgHTMLAttributes<any> & {
  width: string;
  height: string;
  padding: number[];
  margin: number[];
}) => {
  return (
    <Resizer
      propKey={{ width: 'width', height: 'height' }}
      width={width}
      height={height}
    >
      <img
        {...props}
        style={{
          ...(props.style ?? {}),
          width: '100%',
        }}
        src={
          src ||
          `https://placehold.co/${width?.replace(/px$/, '')}x${height?.replace(
            /px$/,
            ''
          )}`
        }
        srcSet={srcSet}
      />
    </Resizer>
  );
};

Image.craft = {
  displayName: 'Image',
  props: defaultProps,
  related: {
    toolbar: ImageSettings,
  },
};
