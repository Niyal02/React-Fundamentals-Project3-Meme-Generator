import classes from './main.module.css'

function Main() {
  return (
    <div className={classes.container}>
        <img className={classes.form_image} src="/reactintern-proj3-troll-face.png" alt="" />
        <form className={classes.form}>
            <div>
                <label>Top Text</label>
                <input className={classes.top}type="text" name="toptext" placeholder="Enter top text here" />
            </div>

            <div>
                <label>Bottom Text</label>
                <input className={classes.bottom}type="text" name="bottomtext" placeholder="Enter bottom text here" />
            </div>

            <button className={classes.button} type="submit">Get meme image 🖼️</button>
      </form>
    </div>
  )
}

export default Main
