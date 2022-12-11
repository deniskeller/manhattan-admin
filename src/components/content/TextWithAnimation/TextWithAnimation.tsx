import React from 'react';

interface Props {
  text: string;
}

const TextWithAnimation: React.FC<Props> = ({ text }) => {
  const computedStr = (str: string) => {
    const spanizer = str.trim().split('');
    return '<span>' + spanizer.join('</span><span>') + '</span>';
  };

  return (
    <>
      <main>
        <section className="mast">
          <figure className="mast__bg"></figure>
          <header className="mast__header">
            <h1 className="mast__title js-spanize">Incoming Transmission</h1>
            <hr className="sep" />
            <p
              className="mast__text js-spanize"
              dangerouslySetInnerHTML={{
                __html: computedStr(text),
              }}
            ></p>
          </header>
        </section>
      </main>
    </>
  );
};

export default TextWithAnimation;
