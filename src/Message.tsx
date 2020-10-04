import { Card, CardContent, Typography } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Message.css';

const Message = forwardRef((props: {username: string, message: {username: string, message: string}}, ref: any) => {
	const isUser = props.username === props.message.username;
  return (
		<div ref={ref} className={`message ${isUser && 'message__user'}`}>
			<Card className={ isUser ? "message__userCard" : "message__guestCard" }>
				<CardContent>
					<Typography
						color="inherit"
						variant="h5"
						component="h2"
					>
						{!isUser && `${props.message.username || '(Unknown User)'}: ` } {props.message.message}
					</Typography>
				</CardContent>
			</Card>
		</div>
  )
})

export default Message