import {useState} from 'react';
import './styles/Chat.css';

function Chat() {

    const [selectedChat, setSelectedChat] = useState(null);

    const chats = [
        { id: 1, name: 'Isha Menon', time: '7:36 pm', message: 'Hey, What are you doing tonight?', img:'https://img.freepik.com/free-photo/lovely-satisfied-freckled-female-with-crisp-hair-has-gentle-smile-dressed-striped-black-white-shirt-rejoices-positive-moments-life-isolated-wall-people-emotions_273609-15763.jpg?semt=ais_hybrid" alt="profile-picture"' },
        { id: 2, name: 'Rohan Sharma', time: '6:15 pm', message: 'Let’s catch up tomorrow morning!', img:'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/001.webp' },
        { id: 3, name: 'Aditi Rao', time: '5:40 pm', message: 'Got the tickets. See you at the concert!', img:'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
        { id: 4, name: 'Neha Kapoor', time: '4:10 pm', message: 'Can you send the report by tonight?', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79RQ2V1E5HT2FurisgydG11hdaeBjYCel7w&s' },
        { id: 5, name: 'Arjun Singh', time: '3:20 pm', message: 'Lunch at the new café today?', img:'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=' },
        { id: 6, name: 'Priya Jain', time: '2:50 pm', message: 'Did you finish the project draft?', img:'https://img.freepik.com/free-photo/asian-woman-posing-looking-camera_23-2148255359.jpg' },
        { id: 7, name: 'Vikram Mehta', time: '1:30 pm', message: 'Let’s meet at the gym later.', img:'https://lirp.cdn-website.com/4d7c0a1b/dms3rep/multi/opt/Guillaume-Deneufbourg-Square_Profile_S-640w.jpg' },
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
                    <img className="profile-picture" src={chat.img}/>
                        <div className='chats-arrange'>
                            <div className="chat-div">
                                <p className='name'>{chat.name}</p>
                                <p className='time'>{chat.time}</p>
                            </div>
                            <div className='chat-div-2'>
                                <p className='message'>{chat.message}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div>
            {/* Conversation Panel */}
            <div className="conversation-panel">
                {selectedChat ? (
                    <div>
                        <h2>{selectedChat.name}</h2>
                        <p>{selectedChat.time}</p>
                        <div className="full-conversation">
                            {/* Render the full conversation here */}
                            <p>{selectedChat.message}</p>
                            <p>Other messages...</p>
                        </div>
                    </div>
                ) : (
                    <p>Select a chat to view the conversation</p>
                )}
            </div>
        </div>
        </>
    );
}

export default Chat;