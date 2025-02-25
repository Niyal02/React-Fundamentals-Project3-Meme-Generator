import React, { ChangeEvent } from "react";
import classes from "./main.module.css";
import memedata from "./memedata.json";

function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const getMemeimage = () => {
    const memesArray = memedata.data;
    const randomNumbers = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumbers].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }));
  }

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <div className={classes.form_image}>
          <img style={{ paddingLeft: "3px" }} src="/dog-meme.png" alt="" />
        </div>
        <div className={classes.input_field}>
          <div className={classes.top_text}>
            <label htmlFor="toptext">Top Text</label>
            <input
              className={classes.top}
              id="toptext"
              type="text"
              name="topText"
              placeholder="Enter top text here"
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
          <div className={classes.bottom_text}>
            <label htmlFor="bottomtext">Bottom Text</label>
            <input
              className={classes.bottom}
              id="bottomtext"
              type="text"
              name="bottomText"
              placeholder="Enter bottom text here"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
        </div>
        <button onClick={getMemeimage} className={classes.button} type="button">
          Get meme image 🖼️
        </button>
      <div className={classes.meme_image}>
        <img style={{width: "100%"}} src={meme.randomImage} alt="" />
        <h2 className={classes.meme_text_top} style={{top:0}}> {meme.topText}</h2>
        <h2 className={classes.meme_text_bottom}>{meme.bottomText}</h2>
      </div>
      </form>
    </div>
  );
}

export default Main;
