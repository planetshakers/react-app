import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "blue"
};
// memoの機能は、親コンポーネントのstateが変更されても
// propsが変更されない限りは再レンダリングしないことを
// 明示化する
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされました");
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
