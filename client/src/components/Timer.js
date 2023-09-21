export default function Timer(props) {

    return (
      <div className="header__timer text-white text-3xl text- w-36 h-16 flex justify-center items-center">
        <b>{props.minutes<10 ? "0"+ props.minutes : props.minutes}:{props.seconds<10 ? "0"+props.seconds : props.seconds}</b>
      </div>)
}
