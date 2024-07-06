import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <button>
                <Link to={"signin"}>signin</Link>
            </button>
            <button>
                <Link to={"signup"}>signup</Link>
            </button>
        </div>
    )
}

export default Header