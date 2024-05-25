import React, { useEffect } from 'react';

const DialogflowMessenger = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css" />
            <df-messenger
                project-id="afterschool125"
                agent-id="c0cc7ee8-1550-4d25-a88d-b140e33f4340"
                language-code="en"
                max-query-length="-1"
            >
                <df-messenger-chat-bubble chat-title="" />
            </df-messenger>
            <style>
                {`
                df-messenger {
                    z-index: 999;
                    position: fixed;
                    --df-messenger-font-color: #000;
                    --df-messenger-font-family: Google Sans;
                    --df-messenger-chat-background: #f3f6fc;
                    --df-messenger-message-user-background: #d3e3fd;
                    --df-messenger-message-bot-background: #fff;
                    bottom: 16px;
                    right: 16px;
                }
                `}
            </style>
        </div>
    );
};

export default DialogflowMessenger;
