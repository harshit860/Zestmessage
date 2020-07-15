import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const MessageSend = React.memo((props) => {

    const [message, handleMessage] = useState('')

    const createMsg = event => {

        handleMessage(event.target.value)
    }

    const sendMessage = () =>{
        if(message != '')
        {
            props.messageSend(message)
        }
       
        handleMessage('')
    }

        
    
    return (
        <div className="">
            <div className="col-xl-12">
                <TextField
                    label="Type The message"
                    multiline
                    rows={5}
                    name="createMessage"
                    onChange={createMsg}
                    variant="outlined"
                    value={message}

                />
            </div>
            <div className="col-xl-12 mt-2">
                <Button onClick={sendMessage} variant="contained" className="text-white bg-success">
                    Send Message
                </Button>
            </div>

        </div>

        )

})



export default MessageSend