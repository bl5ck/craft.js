import { Element, useEditor } from '@craftjs/core';
import { Tooltip } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import styled from 'styled-components';

import ButtonSvg from '../../../public/icons/toolbox/button.svg';
import SquareSvg from '../../../public/icons/toolbox/rectangle.svg';
import TypeSvg from '../../../public/icons/toolbox/text.svg';
import YoutubeSvg from '../../../public/icons/toolbox/video-line.svg';
import ToolboxItem from '../../ToolboxItem';
import { Button } from '../../selectors/Button';
import { Container } from '../../selectors/Container';
import { Image } from '../../selectors/Image';
import { Text } from '../../selectors/Text';
import { Video } from '../../selectors/Video';

const ToolboxDiv = styled.div<{ enabled: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : '')}
  ${(props) => (!props.enabled ? `opacity: 0;` : '')}
`;

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      className="toolbox transition w-12 h-full flex flex-col bg-white"
    >
      <div className="flex flex-1 flex-col items-center pt-3">
        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Container}
                background={{ r: 78, g: 78, b: 78, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
                height="300px"
                width="300px"
              ></Element>
            )
          }
        >
          <Tooltip title="Container" placement="right">
            <ToolboxItem className="m-2 pb-2 cursor-pointer block" move>
              <SquareSvg />
            </ToolboxItem>
          </Tooltip>
        </div>
        <div
          ref={(ref) =>
            create(ref, <Text fontSize="12" textAlign="left" text="Hi there" />)
          }
        >
          <Tooltip title="Text" placement="right">
            <ToolboxItem className="m-2 pb-2 cursor-pointer block" move>
              <TypeSvg />
            </ToolboxItem>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Button />)}>
          <Tooltip title="Button" placement="right">
            <ToolboxItem className="m-2 pb-2 cursor-pointer block" move>
              <ButtonSvg />
            </ToolboxItem>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Image />)}>
          <Tooltip title="Image" placement="right">
            <ToolboxItem className="m-2 pb-2 cursor-pointer block" move>
              <ImageIcon />
            </ToolboxItem>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Video />)}>
          <Tooltip title="Video" placement="right">
            <ToolboxItem className="m-2 pb-2 cursor-pointer block" move>
              <YoutubeSvg />
            </ToolboxItem>
          </Tooltip>
        </div>
      </div>
    </ToolboxDiv>
  );
};
