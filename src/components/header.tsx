import classes from './header.module.css'

function Header() {
  return (
    <div className={classes.header}>
        <img className={classes.header_image} src="/reactintern-proj3-troll-face.png" alt="" />
      <h2 className={classes.header_title}>Meme Generator</h2>
      <h4 className={classes.header_project}>React Course - Project 3</h4>
    </div>
  )
}

export default Header
