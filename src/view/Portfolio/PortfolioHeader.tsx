import {BaseContainer, BaseTitle} from "@base/index";
import styles from "./Portfolio.module.scss";
import {Header} from "@content/index";
import React, {useEffect, useState} from "react";
import {computedStr} from "@utils/index";
import {TPortfolioHeader} from "@content/Editor/plugins/PortfolioHeaderPlugin";

export const PortfolioHeader: React.FC<TPortfolioHeader> = ({text1, text2})=>{
  const [paragraph, setParagraph] = useState('');
  const [paragraph2, setParagraph2] = useState('');

  useEffect(()=>{
    setTimeout(
      () =>
        setParagraph(
          computedStr(text1 || "")
          //This is a story, all about how, My life got twisted upside down. So I'd like to tell a story, just sit right there. And I'll tell you how I became the prince of Bel Air.
        ),
      0
    );
  },[text1]);
  useEffect(()=>{
    setTimeout(
      () =>
        setParagraph2(
          computedStr(text2 || "")
          //'Each startup in our portfolio was designed by our R&D team and	managed by its founders and ideologists who trust in its future and	would like to make significant changes in the FinTech world.'
        ),
      1300
    );
  },[text2]);

  return (
      <BaseContainer>
        <div className={styles.Header}>
          <Header>
            <BaseTitle>PORTFOLIO</BaseTitle>
          </Header>
        </div>

        <div className={styles.Description}>
          {/* {paragraphs?.map((item, index) => {
            return (
              <p
								className="paragraph_animated"
                key={index}
                dangerouslySetInnerHTML={{
                  __html: setTimeout(
                    () => computedStr(item.paragraph),
                    item.delay
                  ),
                }}
              ></p>
            );
          })} */}

          <p
            className="paragraph_animated"
            dangerouslySetInnerHTML={{
              __html: paragraph,
            }}
          ></p>

          <p
            className="paragraph_animated"
            dangerouslySetInnerHTML={{
              __html: paragraph2,
            }}
          ></p>
        </div>
      </BaseContainer>)
}