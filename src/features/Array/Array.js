import { useSelector, useDispatch } from 'react-redux';
import {
  to_right,
  to_left,
  selectLeftArray,
  selectRightArray,
} from './arraySlice';
import styles from './Array.module.css';

export function Cards() {
  // useSelectorでstoreからデータ取得
  const leftArray = useSelector(selectLeftArray);
  const rightArray = useSelector(selectRightArray);
  // dispatchでrootに登録したreducerをactionに紐づけて使用
  const dispatch = useDispatch();
  return (
    <>
      <CardLeft Array={leftArray}><button onClick={()=>dispatch(to_right())}>右へ移動</button></CardLeft>
      <CardRight Array={rightArray}><button onClick={()=>dispatch(to_left())}>左へ移動</button></CardRight>
    </>
  );
}

// 左右を別コンポーネントで実装しました
function CardLeft(props){
  return(
    <div className={styles.container}>
      <div className={styles.card}>
        {props.Array.map((text,index)=>
          <li key={text+index} className={styles.text_list}>
            <TextList text={text}></TextList>
          </li>
        )}
      </div>
      {props.children}
    </div>
  );
}
function CardRight(props){
  return(
    <div className={styles.container}>
      <div className={styles.card}>
        {props.Array.map((text,index)=>
          <li key={text+index} className={styles.text_list}>
            <TextList text={text}></TextList>
          </li>
        )}
      </div>
      {props.children}
    </div>
  );
}

function TextList(props){
  return(
    <>
      {props.text}
    </>
  );
}