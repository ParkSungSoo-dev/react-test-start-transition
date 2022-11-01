import {useState, useTransition} from 'react'
import RectContainer from '../../src/component/RectContainer'
import Rect from '../../src/component/Rect'

const Transition = () => {
  const [count, setCount] = useState<number>(2000);
  const [isPending, startTransition] = useTransition();

  const handleCountChange = (newCount: number) => {
    const _newCount = Number.isNaN(newCount) ? 0 : newCount;
    startTransition(() => {
      setCount(Math.min(_newCount, 4000));
    });
  }

  return (
    <>
      <input
        value={count}
        type={'number'}
        style={{backgroundColor: isPending ? 'red' : undefined}}
        onChange={(e) => handleCountChange(Number(e.currentTarget.value))}
      />
      <RectContainer>{new Array(count).fill(0).map(() => <Rect color={'red'} />)}</RectContainer>
    </>
  );
};

export default Transition;
