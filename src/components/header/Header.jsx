import HeaderStyled from "./header.module.css"

const Header = () => {
  return (
   <header className={HeaderStyled.header}>
    <img src="./img/logo-tvf.png" alt="" />
   </header>
  )
}

export default Header