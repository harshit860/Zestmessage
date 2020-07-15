import React, { useState } from 'react'
import { connect } from 'react-redux'
import MessageSend from './MessageSend'
import Card from '@material-ui/core/Card';

import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

function MessageView(props) {
    const [messages, handleMessage] = useState([])
   

    const addMessage = (val) => {
        let element = {
            value:val,
            id:Date.now()
        }
        handleMessage(intialArray => [...intialArray, element])
    }
   

    const deleteMessage = (element) => {
        handleMessage(messages.filter(val => val.id != element))

    }
    
    return (
        <div className="row col-xl-12">
            <div className="col-xl-3">
                {messages.map(message => {
                    return <div className="col-xl-12 col-lg-12 mt-3 row" onClick={() => deleteMessage(message.id)}>
                        <div className="col-xl-8">
                            <Card >
                                <Typography>
                                    Message: {message.value}

                                </Typography>

                            </Card>
                        </div>
                        <div  className="col-xl-3">
                            <Button className="bg-danger text-white">X</Button>
                        </div>


                    </div>
                })}
            </div>
            <div>
                <MessageSend  messageSend={addMessage} />
            </div>
        </div>
    )
}


export default MessageView