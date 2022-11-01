import {useDeferredValue, useState} from 'react'
import RectContainer from '../../src/component/RectContainer'
import Rect from '../../src/component/Rect'

const Deferred = () => {
  const [count, setCount] = useState<number>(2000);
  const countDeferred = useDeferredValue(count);

  const handleCountChange = (newCount: number) => {
    const _newCount = Number.isNaN(newCount) ? 0 : newCount;
    setCount(Math.min(_newCount, 4000));
  }

  return (
    <>
      <input value={count} type={'number'} onChange={(e) => handleCountChange(Number(e.currentTarget.value))} />
      <RectContainer>{new Array(countDeferred).fill(0).map(() => <Rect color={'red'} />)}</RectContainer>
    </>
  );
};

export default Deferred;
