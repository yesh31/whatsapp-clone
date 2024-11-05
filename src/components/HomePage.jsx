import Sidebar from "./Sidebar"
import Chat from "./Chat"
import "./styles/HomePage.css"
import ChatDisplay from "./ChatDisplay"

function HomePage () {
    return (
        <div className="homepage">
            <Sidebar/>
            <Chat />
            <ChatDisplay />
        </div>
    )
}

export default HomePage