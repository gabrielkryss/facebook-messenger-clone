import React, { useEffect, useState } from 'react';
import { FormControl, Input } from "@material-ui/core";
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [ input, setInput ] = useState('');
  const [ messages, setMessages ] = useState([]);
  const [ username, setUsername ] = useState('');

  useEffect(() => {
    // run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      const dbItems: any = snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}));
      setMessages(dbItems);
    })
  }, [] )

  useEffect(() => {
    const name: any = prompt('Please Enter Your Name');
    setUsername(name);
  }, [] )

  const sendMessege = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // logic to send messege goes here
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=300&h=300" ></img>
      <h1> Facebook Messenger Clone </h1>
      <h3> by <a href="https://github.com/gabrielkryss">Gabriel</a> </h3>
      <h2> Welcome {username} </h2>

      <form className='app__form'>
      <FormControl className='app__formControl'>
        <Input className='app__input' placeholder='Enter a message...' value={input} onChange={(event) => setInput(event.target.value)} />
        <IconButton className='app__iconButton' disabled={!input} color='primary' type='submit' onClick={sendMessege}>
          <SendIcon />
        </IconButton>

      </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
