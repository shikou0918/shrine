import * as React from 'react';
import emotionStyled from '@emotion/styled';

const BtnEmo = emotionStyled('button')(({ css }) => css);

export const DefaultButtonEmotion = (props) => {
  return (
    <>
      <BtnEmo
        css={{
          fontSize: '12px',
          backgroundColor: '#fff',
          color: '#000',
          width: '100%',
          height: '24px',
          padding: '0 15px',
          margin: props.margin ? props.margin : '',
          border: '1px solid',
          borderColor: '#fff',
          borderRadius: '24px',
          cursor: 'pointer',
          // textOverflow: 'ellipsis',
          // whiteSpace: 'nowrap',
          // pointerEvents: 'auto',
        }}
      >
        {props.text}
      </BtnEmo>
    </>
  );
};
