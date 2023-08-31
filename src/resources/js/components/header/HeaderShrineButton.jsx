import * as React from 'react';
import { DefaultButtonEmotion } from '../DefaultButtonEmotion';
import { ShrineList } from './modal/ShrineList';

export const HeaderShrineButton = () => {
  const [shrineListModalDisp, setShrineListModalDisp] = React.useState(false);

  const handleButtonClick = () => {
    setShrineListModalDisp(true);
  };

  return (
    <>
      <DefaultButtonEmotion
        text='検索結果一覧'
        margin={'5px 0'}
        onClick={handleButtonClick}
      />
      <ShrineList setModalDisp={setShrineListModalDisp}  modalDisp={shrineListModalDisp} />
    </>
  );
};
