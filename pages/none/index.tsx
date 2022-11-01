import RectContainer from '../../src/component/RectContainer'
import {useState} from 'react'
import Rect from '../../src/component/Rect'

const None = () => {
  const [count, setCount] = useState<number>(2000);

  const handleCountChange = (newCount: number) => {
    const _newCount = Number.isNaN(newCount) ? 0 : newCount;
    setCount(Math.min(_newCount, 4000));
  }

  return (
    <>
      <input value={count} type={'number'} onChange={(e) => handleCountChange(Number(e.currentTarget.value))} />
      <RectContainer>{new Array(count).fill(0).map(() => <Rect color={'red'} />)}</RectContainer>
    </>
  );
};

export default None;
