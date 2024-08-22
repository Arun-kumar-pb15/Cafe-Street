
const Button = (props) => {
  return (
    <button className={`btnImg  degingName ${props?.className}`}>
      {props.text}
      {
        props.iconImage && <img src={`/images/${props.iconImage}`} alt="button_order" />
      }
    </button>
  )
}

export default Button