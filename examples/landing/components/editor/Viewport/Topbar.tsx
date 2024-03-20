// import { useEditor } from '@craftjs/core';
import {
  // Dialog,
  // DialogActions,
  // DialogContent,
  // DialogTitle,
  // Button as MaterialButton,
  Snackbar,
  // TextField,
} from '@material-ui/core';
// import { FolderOpen } from '@material-ui/icons';
// import copy from 'copy-to-clipboard';
// import lz from 'lzutf8';
import { useState } from 'react';

// import Btn from '../../Btn';

export const Topbar = () => {
  // const { actions, query } = useEditor((state) => ({
  //   enabled: state.options.enabled,
  // }));

  // const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  // const [stateToLoad, setStateToLoad] = useState(null);

  return (
    <div className="HeaderItems-center flex w-full px-4 justify-end">
      {/* <HeaderItem
        className="copy-state-btn"
        onClick={() => {
          const json = query.serialize();
          copy(lz.encodeBase64(lz.compress(json)));
          setSnackbarMessage('State copied to clipboard');
        }}
      >
        Copy current state
      </HeaderItem>
      <Btn
        className={'transition cursor-pointer bg-primary'}
        onClick={() => setDialogOpen(true)}
      >
        <FolderOpen /> Open
      </Btn>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">Load state</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            fullWidth
            placeholder='Paste the contents that was copied from the "Copy Current State" button'
            value={stateToLoad}
            onChange={(e) => setStateToLoad(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <MaterialButton onClick={() => setDialogOpen(false)} color="primary">
            Cancel
          </MaterialButton>
          <MaterialButton
            onClick={() => {
              setDialogOpen(false);
              const json = lz.decompress(lz.decodeBase64(stateToLoad));
              actions.deserialize(json);
              setSnackbarMessage('State loaded');
            }}
            color="primary"
            autoFocus
          >
            Load
          </MaterialButton>
        </DialogActions>
      </Dialog> */}
      <Snackbar
        autoHideDuration={1000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={!!snackbarMessage}
        onClose={() => setSnackbarMessage(null)}
        message={<span>{snackbarMessage}</span>}
      />
    </div>
  );
};
