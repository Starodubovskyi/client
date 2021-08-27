import  style from "./share.module.css";
import {PermMedia, Label,Room, EmojiEmotions, StyleTwoTone} from "@material-ui/icons"


export default function Share() {
  return (
    <div className={style.share}>
      <div className={style.shareWrapper}>
        <div className={style.shareTop}>
          <img className={style.shareProfileImg} src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What is your mind Yulian"
            className={style.shareInput}
          />
        </div>
        <hr className={style.shareHr}/>
        <div className={style.shareBottom}>
            <div className={style.shareOptions}>
                <div className={style.shareOption}>
                    <PermMedia htmlColor="tomato" className={style.shareIcon}/>
                    <span className={style.shareOptionText}>Photo or Video</span>
                </div>
                <div className={style.shareOption}>
                    <Label htmlColor="blue" className={style.shareIcon}/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className={style.shareOption}>
                    <Room htmlColor="green" className={style.shareIcon}/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className={style.shareOption}>
                    <EmojiEmotions htmlColor="goldenrod" className={style.shareIcon}/>
                    <span className={style.shareOptionText}>Feelings</span>
                </div>
            </div>
            <button className={style.shareButton}>Share</button>
        </div>
      </div>
    </div>
  );
}
