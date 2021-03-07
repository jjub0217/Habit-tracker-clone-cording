import React, { PureComponent } from "react";

class Habit extends PureComponent { // <- Habit 이라는 li
 
  // 이벤트가 발생하면 동작하는 것(props 콜백함수)들을 부모 컴포넌트로부터 전달받아서, 해당 이벤트 함수를 호출시킬것이다.
  HabitHandleIncrement = (h) => {
    console.log(h); // syntheticBaseEvent
    console.log(this.props); 
    /* { propHabit: {id: 1, name: 'Reading', count: 0},
         onIncrement f,
         onDecrement f,
         onDelete f, 
        }*/
    // 부모 컴포넌트인 Habits 에서부터 상속받은 onIncrement 의 값인 handleIncrement 함수를 호출
    this.props.HabitsOnIncrement(this.props.propHabit) 
  }

  HabitHandleDecrement = () => {
    // this.props.onDecrement(this.props.propHabit)
    this.props.HabitsOnDecrement(this.props.propHabit)
  }

  HabitHandleDelete = () => {
    this.props.HabitsOnDelete(this.props.propHabit)
  }

  
  render() {
   
    const {name, count} = this.props.propHabit;
    // const {name} = this.props.propHabit;
    // const {count} = this.props;

    return (
      <li className="habit">

        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.HabitHandleIncrement}>

          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.HabitHandleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button 
         className="habit-button habit-delete"
         onClick={this.HabitHandleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
