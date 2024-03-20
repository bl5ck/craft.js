import { useEditor } from '@craftjs/core';
import cx from 'classnames';
import lz from 'lzutf8';
import React, { useEffect, useState } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Toolbox } from './Toolbox';

export const Viewport: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const { enabled, connectors, actions } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const [state, setState] = useState<string>('');
  const { setOptions } = actions;
  useEffect(() => {
    if (!state?.trim()) {
      return;
    }
    const json = lz.decompress(lz.decodeBase64(state));
    actions.deserialize(json);
  }, [state, actions]);

  console.log(setState);

  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        '*'
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);

  return (
    <div className="viewport">
      <div
        className={cx(['flex h-full overflow-hidden flex-row w-full fixed'])}
      >
        <Toolbox />
        <div className="page-container flex flex-1 h-full flex-col">
          <Header />
          <div
            className={cx([
              'craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto',
              {
                'bg-renderer-gray': enabled,
              },
            ])}
            ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
          >
            <div className="relative flex-col flex items-center pt-8">
              {children}
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
