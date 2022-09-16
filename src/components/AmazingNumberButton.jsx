import '../css/Calculator.css';

export default function AmazingNumberButton(props) {

  const nbr = [7,8,9,4,5,6,1,2,3,0,'.']
  var handleClick = (e) => {
    props.handleClickParent(e);
  }
  return (
    <div>
        {nbr.map((nbrs) => (
          <button key={nbrs}  className={
            nbrs == 0 ? "buttonsLarge" : nbrs=="." ? "buttonsDot" : "buttons"
          }
          value={nbrs} onClick={(e)=> handleClick(e)}>{nbrs}</button>
        ))}

    </div>
  )
}
