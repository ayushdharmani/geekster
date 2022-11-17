import { useState } from 'react';
import { css } from '@emotion/css';
import GuestRoomDialog from './components/GuestRoomDialog';
import { pushState } from './base/pushState';
import { Button } from './components/Button';
import photo from 'D:/guest-picker/src/23534.jpg';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <div className="App">
      <h1>FIND<span>HOTEL</span></h1>
      <div className='container'>
      <img className='main-img' src={photo} alt="Hotel Pic" width="800px"></img>
      </div>
      
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 15%;
          width: 100%;
          margin: auto;
        `}
      >

        <Button onClick={openDialog}>Search</Button>
      </div>
      <GuestRoomDialog onClose={closeDialog} open={open} onSearch={pushState} />
    </div>
  );
}

export default App;
