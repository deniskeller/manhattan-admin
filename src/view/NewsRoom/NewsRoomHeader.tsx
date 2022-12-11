import styles from "@view/NewsRoom/NewsRoom.module.scss";
import {Header} from "@content/index";
import {BaseContainer, BaseTitle} from "@base/index";
import React, {useEffect, useState} from "react";
import {computedStr} from "@utils/index";
type NewsHeaderProps = {
  text: string
}

export const NewsRoomHeader: React.FC<NewsHeaderProps> = ({text}) => {
  const [paragraph, setParagraph] = useState('');
  useEffect(()=>{
    setTimeout(
      () =>
        setParagraph(
          computedStr(text || "s")
        ),
      0
    );
  },[text])



  return <BaseContainer>
    <div className={styles.Header}>
      <Header>
        <BaseTitle>News room</BaseTitle>
      </Header>
    </div>

    <div className={styles.Description}>
      <p
        className="paragraph_animated"
        dangerouslySetInnerHTML={{
          __html: paragraph,
        }}
      ></p>
    </div>
  </BaseContainer>
}
