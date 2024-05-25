import {  message  } from 'antd'
export const success = ({messageContent}) => {
    message.open({
        type: 'success',
        content: messageContent,
    })
}
export const error = ({messageContent}) => {
    message.open({
        type: 'error',
        content: messageContent,
    });
}
export const warning = ({messageContent}) => {
    message.open({
        type: 'warning',
        content: messageContent,
    });
}