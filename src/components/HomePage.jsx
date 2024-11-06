import Sidebar from "./Sidebar"
import Chat from "./Chat"
import "./styles/HomePage.css"

function HomePage () {
    return (
        <div className="homepage">
            <Sidebar/>
            <Chat />
        </div>
    )
}

export default HomePage