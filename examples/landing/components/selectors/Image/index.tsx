import React from 'react';

import { ImageSettings } from './ImageSettings';

import { Resizer } from '../Resizer';

export const Image = ({
  width,
  height,
  src,
  srcSet,
  ...props
}: React.ImgHTMLAttributes<any> & {
  padding: number[];
  margin: number[];
}) => {
  return (
    <Resizer propKey={{ width: 'width', height: 'height' }}>
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
  props: {
    src: '',
    alt: 'Image',
  },
  related: {
    toolbar: ImageSettings,
  },
};
