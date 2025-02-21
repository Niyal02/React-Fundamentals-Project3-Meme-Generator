import classes from './main.module.css'

function Main() {
  return (
    <div className={classes.container}>
        <form className={classes.form}>
            <div className={classes.form_image}>
                <img style={{paddingLeft:'3px'}} src='/dog-meme.png' alt='' />               
            </div>
            <div className={classes.input_field}>
            <div className={classes.top_text}>
                <label htmlFor='toptext'>Top Text</label>
                <input className={classes.top} id='toptext' type="text" name="toptext" placeholder="Enter top text here" />
            </div>
            <div className={classes.bottom_text}>
                <label htmlFor='bottomtext'>Bottom Text</label>
                <input  className={classes.bottom} id='bottomtext' type="text" name="bottomtext" placeholder="Enter bottom text here" />
            </div>
            </div>
            <button className={classes.button} type="submit">Get meme image 🖼️</button>
      </form>
    </div>
  )
}

export default Main
