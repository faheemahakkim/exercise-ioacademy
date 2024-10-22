import "./navlink.css"


function NavLink({link,text}) {
    return(
       <a href={link} target="_blank">{text}</a>
    )
}

export default NavLink