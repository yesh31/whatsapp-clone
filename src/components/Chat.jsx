import { useState } from 'react';
import './styles/Chat.css';

function Chat() {

    const [selectedChat, setSelectedChat] = useState(null);

    const [completeChat, setCompleteChat] = useState(null);

    const chats = [
        {
            id: 1,
            name: 'Isha Menon',
            time: '7:36 pm',
            lastmessage: 'Hey, What are you doing tonight?',
            img: 'https://img.freepik.com/free-photo/lovely-satisfied-freckled-female-with-crisp-hair-has-gentle-smile-dressed-striped-black-white-shirt-rejoices-positive-moments-life-isolated-wall-people-emotions_273609-15763.jpg?semt=ais_hybrid',
            messages: [
                { time: "7:30 pm", sender: "Isha", text: "Hey! How’s it going?" },
                { time: "7:31 pm", sender: "You", text: "Good, just wrapping up some work. You?" },
                { time: "7:32 pm", sender: "Isha", text: "Same here! Got any plans for tonight?" },
                { time: "7:34 pm", sender: "You", text: "Not yet. Why, what’s up?" },
                { time: "7:36 pm", sender: "Isha", text: "Hey, what are you doing tonight?" }
            ]
        },
        {
            id: 2,
            name: 'Rohan Sharma',
            time: '6:15 pm',
            lastmessage: 'Let’s catch up tomorrow morning!',
            img: 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/001.webp',
            messages: [
                { time: "6:05 pm", sender: "You", text: "Hey Rohan! Busy week?" },
                { time: "6:06 pm", sender: "Rohan", text: "Yeah, loads of meetings. Need a break!" },
                { time: "6:07 pm", sender: "You", text: "Same here. We should catch up." },
                { time: "6:10 pm", sender: "Rohan", text: "Morning works for me. Coffee?" },
                { time: "6:15 pm", sender: "Rohan", text: "Let’s catch up tomorrow morning!" }
            ]
        },
        {
            id: 3,
            name: 'Aditi Rao',
            time: '5:40 pm',
            lastmessage: 'Got the tickets. See you at the concert!',
            img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            messages: [
                { time: "5:30 pm", sender: "You", text: "Did you manage to get the tickets?" },
                { time: "5:32 pm", sender: "Aditi", text: "Yes! Finally managed to grab a pair." },
                { time: "5:34 pm", sender: "You", text: "Awesome! Can't wait for the concert." },
                { time: "5:36 pm", sender: "Aditi", text: "Me too! Let’s meet there around 7?" },
                { time: "5:40 pm", sender: "Aditi", text: "Got the tickets. See you at the concert!" }
            ]
        },
        {
            id: 4,
            name: 'Neha Kapoor',
            time: '4:10 pm',
            lastmessage: 'Can you send the report by tonight?',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79RQ2V1E5HT2FurisgydG11hdaeBjYCel7w&s',
            messages: [
                { time: "3:55 pm", sender: "Neha", text: "Hey, any updates on the report?" },
                { time: "3:56 pm", sender: "You", text: "Almost done, just polishing it up." },
                { time: "4:00 pm", sender: "Neha", text: "Great! Can you include the analysis section?" },
                { time: "4:05 pm", sender: "You", text: "Sure thing. Will send it by evening." },
                { time: "4:10 pm", sender: "Neha", text: "Can you send the report by tonight?" }
            ]
        },
        {
            id: 5,
            name: 'Arjun Singh',
            time: '3:20 pm',
            lastmessage: 'Lunch at the new café today?',
            img: 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=',
            messages: [
                { time: "3:00 pm", sender: "Arjun", text: "Have you tried that new café yet?" },
                { time: "3:02 pm", sender: "You", text: "Not yet, but I’ve heard good things." },
                { time: "3:05 pm", sender: "Arjun", text: "Wanna go today for lunch?" },
                { time: "3:10 pm", sender: "You", text: "Sounds good! Let’s meet around 12?" },
                { time: "3:20 pm", sender: "Arjun", text: "Lunch at the new café today?" }
            ]
        },
        {
            id: 6,
            name: 'Priya Jain',
            time: '2:50 pm',
            lastmessage: 'Did you finish the project draft?',
            img: 'https://img.freepik.com/free-photo/asian-woman-posing-looking-camera_23-2148255359.jpg',
            messages: [
                { time: "2:30 pm", sender: "Priya", text: "Hey! How’s the project draft coming along?" },
                { time: "2:32 pm", sender: "You", text: "Almost there. I’ll share it soon for feedback." },
                { time: "2:35 pm", sender: "Priya", text: "Great, looking forward to seeing it." },
                { time: "2:40 pm", sender: "You", text: "Just finishing up the last few sections." },
                { time: "2:50 pm", sender: "Priya", text: "Did you finish the project draft?" }
            ]
        },
        {
            id: 7,
            name: 'Vikram Mehta',
            time: '1:30 pm',
            lastmessage: 'Let’s meet at the gym later.',
            img: 'https://lirp.cdn-website.com/4d7c0a1b/dms3rep/multi/opt/Guillaume-Deneufbourg-Square_Profile_S-640w.jpg',
            messages: [
                { time: "1:15 pm", sender: "You", text: "What’s the plan for today’s workout?" },
                { time: "1:17 pm", sender: "Vikram", text: "Thinking of doing some strength training." },
                { time: "1:20 pm", sender: "You", text: "Perfect, I’m in." },
                { time: "1:25 pm", sender: "Vikram", text: "Let’s meet around 6 at the gym?" },
                { time: "1:30 pm", sender: "Vikram", text: "Let’s meet at the gym later." }
            ]
        }
    ];

    const handleChatClick = (chat) => {
        setSelectedChat(chat);
    };

    return (
        <>
            <div className="chat">
                <div className="chat-top">
                    <div className='v-1'>
                        <h1>Chats</h1>
                    </div>
                    <div className="v-2">
                        <svg className='svg-1' viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>new-chat-outline</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="currentColor"></path></svg>
                        <svg className='svg-2' viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                    </div>
                </div>
                <div className="search-box">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>search</title><path fill="currentColor" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
                    <input type="text" className='search-bar' placeholder='Search' />
                </div>
                <div className="filter-buttons">
                    <button className='b-1'>All</button>
                    <button className='b-2'>Unread</button>
                    <button className='b-3'>Favourites</button>
                    <button className='b-4'>Groups</button>
                </div>
                <div className="archived">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>archived-outline</title><path d="M21.4889 4.47778L19.9444 2.61111C19.6444 2.23333 19.1889 2 18.6667 2H5.33333C4.81111 2 4.35556 2.23333 4.04444 2.61111L2.51111 4.47778C2.18889 4.85556 2 5.35556 2 5.88889V19.7778C2 21 3 22 4.22222 22H19.7778C21 22 22 21 22 19.7778V5.88889C22 5.35556 21.8111 4.85556 21.4889 4.47778ZM5.6 4.22222H18.4L19.3 5.3H4.71111L5.6 4.22222ZM4.22222 19.7778V7.55556H19.7778V19.7778H4.22222ZM13.6111 9.77778H10.3889V13.1111H7.55556L12 17.5556L16.4444 13.1111H13.6111V9.77778Z" fill="rgb(0, 168, 132)"></path></svg>
                    <div className='archive-text'>Archived</div>
                    <div className='archive-num'>4</div>
                </div>
                <div className="chats-list">
                    {chats.map((chat) => (
                        <div key={chat.id} className="chats" onClick={() => handleChatClick(chat)}>
                            <img className="profile-picture" src={chat.img} />
                            <div className='chats-arrange'>
                                <div className="chat-div">
                                    <p className='name'>{chat.name}</p>
                                    <p className='time'>{chat.time}</p>
                                </div>
                                <div className='chat-div-2'>
                                    <p className='message'>{chat.lastmessage}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="conversation-panel">
                    {selectedChat ? (
                        <div className="conversation-panel-div">
                            <div className='chat-banner'>
                                <img src={selectedChat.img} alt="banner-pp" className='banner-pp' />
                                <h2 style={{ 'background-color': 'inherit' }}>{selectedChat.name}</h2>
                                <div className="convo-right">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>video-call</title><path d="M3.27096 7.31042C3 7.82381 3 8.49587 3 9.84V14.16C3 15.5041 3 16.1762 3.27096 16.6896C3.5093 17.1412 3.88961 17.5083 4.35738 17.7384C4.88916 18 5.58531 18 6.9776 18H13.1097C14.502 18 15.1982 18 15.7299 17.7384C16.1977 17.5083 16.578 17.1412 16.8164 16.6896C17.0873 16.1762 17.0873 15.5041 17.0873 14.16V9.84C17.0873 8.49587 17.0873 7.82381 16.8164 7.31042C16.578 6.85883 16.1977 6.49168 15.7299 6.26158C15.1982 6 14.502 6 13.1097 6H6.9776C5.58531 6 4.88916 6 4.35738 6.26158C3.88961 6.49168 3.5093 6.85883 3.27096 7.31042Z" fill="currentColor"></path><path d="M18.7308 9.60844C18.5601 9.75994 18.4629 9.97355 18.4629 10.1974V13.8026C18.4629 14.0264 18.5601 14.2401 18.7308 14.3916L20.9567 16.3669C21.4879 16.8384 22.3462 16.4746 22.3462 15.778V8.22203C22.3462 7.52542 21.4879 7.16163 20.9567 7.63306L18.7308 9.60844Z" fill="currentColor" className='video-call-icon'></path></svg>
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>search-alt</title><path fill="currentColor" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path></svg>
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                                </div>
                            </div>
                            <div className="full-conversation">
                                {selectedChat.messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`chat-bubble ${message.sender === "You" ? "outgoing" : "incoming"}`}
                                    >
                                        <div className="message-content">
                                            <p style={{ backgroundColor: 'inherit' }}>{message.text}</p>
                                            <div className="message-time">{message.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="input-chat-div">
                                <div className="left-input">
                                    <img src="src\assets\smily.png" style={{height:'24px',width:'24px',backgroundColor:'inherit'}} className='emoji-box'/>
                                    <img src="src\assets\more-icon.png" style={{height:'30px',width:'30px',backgroundColor:'inherit'}} className='more-box'/>
                                </div>
                                <div className="middle-input">
                                    <input type="text" placeholder='Type a message' className='input-message' />
                                </div>
                                <div className="right-input">
                                    <svg className='microphone-box' viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>ptt</title><path fill="currentColor" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="unselected-chat-div">
                            <img style={{ 'background-color': 'inherit' }} width="320" alt="" src="https://static.whatsapp.net/rsrc.php/v3/y6/r/wa669aeJeom.png"></img>
                            <h1 style={{ 'background-color': 'inherit', fontSize: '36px', fontWeight: '300', fontFamily: '"SF Pro Text", "SF Pro Icons", system, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Ubuntu, Cantarell, "Fira Sans", sans-serif', color: 'rgba(233, 237, 239, 0.88)' }}>Download WhatsApp for Windows</h1>
                            <div className='description-unselected' style={{ fontSize: '14px;', 'font-weight': '400px;', 'fontFamily': '"SF Pro Text", "SF Pro Icons", system, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Ubuntu, Cantarell, "Fira Sans", sans-serif', color: 'rgba(233, 237, 239, 0.88)' }}>Make calls, share your screen and get a faster experience when you download the Windows app.</div>
                            <button style={{ fontFamily: '"Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif', fontWeight: '500' }}>Get from Microsoft Store</button>
                            <div className="last-sentence-unselected">
                                <svg viewBox="0 0 10 12" height="12" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1"><title>lock-small</title><path d="M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z" fill="currentColor"></path></svg>
                                <p style={{ backgroundColor: 'inherit', 'margin-left': '10px', fontSize: '14px' }}>Your personal messages are end to end encrypted</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Chat;