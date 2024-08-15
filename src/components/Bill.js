const Bill = ({bill, onHandleBill}) => {
    
  return (
    <div>
        How much was the bill?
        <input type="text" value={bill} onChange={(e)=>{onHandleBill(e.target.value);}}  />
    </div>
  )
}
export default Bill