import { Link } from "react-router-dom"
import PeopleIcon from '@mui/icons-material/People';
import CottageIcon from '@mui/icons-material/Cottage';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { IconButton } from "@mui/material";


const Header = () => {
    return (
        <header className="Header">
            <h1>Peoples Blog
            <IconButton>< PeopleIcon
            color="success"
            fontSize="large"
            /></IconButton>
            </h1>
            
            <nav>
                <ul>
                    <li><Link to="/">Home
                    <IconButton>< CottageIcon 
                    color="primary"/>
                    </IconButton>
                    </Link></li>
                    <li><Link to="post">Add Blog
                    <IconButton>< AddCommentIcon
                    color="primary"/>
                    </IconButton>
                    </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header