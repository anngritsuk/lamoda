import './OtherStyles/OtherStyles.css'
import Item from './Item'

const Things = (props) => {
  return (
    <div id="container">
      {props.array.length === 0 ? (
        <div id="noMatch">НЕ НАШЛОСЬ СОВПАДЕНИЙ</div>
      ) : (
        props.array.map((item, index) => (
          <div id="itemList" key={index}>
            <Item
              id={index}
              image={item.image}
              name={item.name}
              color={item.color}
              price={item.price}
              rating={item.rating}
            />
          </div>
        ))
      )}
    </div>
  )
}

export default Things
