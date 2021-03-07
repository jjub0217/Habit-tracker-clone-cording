import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  // <- Habit 라는 Container 와, Container > ul 까지


  HabitsHandleIncrement = (h) => {
    console.log(this.props);
    /* {
            habits: [{...}, {...}, {...}],
            onIncrement f,
            onDecrement f,
            onDelete f 
            }
        */

    console.log(h); // <- 뭐가 들어오는거지?
    // {id: 1, name: Reading, count:0} : 어째서 이게 들어오는 거지?

    this.props.AppOnIncrement(h);
  };

  HabitsHandleDecrement = (h) => {
    console.log(h); // <- 뭐가 들어오는 거지?
    console.log(this.props);
    this.props.AppOnDecrement(h);
    // this.props.onDecrement(this.props.propHabit)
  };

  HabitsHandleDelete = (h) => {
    console.log(h); // <- 뭐가 들어오는 거지?
    console.log(this.props);
    this.props.AppOnDelete(h);
  };

  HabitsHandleAdd = (habitName) => {

    //   console.log(habitName); // 강주현
    //   console.log(this.props.onAdd(habitName));
      this.props.AppOnAdd(habitName);
  };


  render() {
    return (
      <>
        <HabitAddForm HabitsOnAdd={this.HabitsHandleAdd} />
        <ul className="habits">
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              propHabit={habit}
              // count={habit.count}
              // name={habit.name}
              HabitsOnIncrement={this.HabitsHandleIncrement}
              HabitsOnDecrement={this.HabitsHandleDecrement}
              HabitsOnDelete={this.HabitsHandleDelete}

            />
          ))}
          {/* └ habits 의 length 만큼 Habit 컴포넌트 전체를 map 돌려라.*/}
          {/* propHabit 에는 habits 배열의 하나의 요소가 들어간다. */}
          {/* └ li 에는 고유한 key. 즉, id 값이 있어야 하기 때문에 반드시 id를 사용해야 한다. 주의해야 할점은 index 를 사용하면 안된다. 
                index 는 추가 삭제로 인해서 달라질수도 있기 때문이다. */}

          {/* onIncrement 라는 attribute 속성 값으로, handleIncrement 라는 함수정의가 할당되었다. 
                    그러고, 그 onIncrement 라는 속성값인 handleIncrement 함수는 자식 컴포넌트인 Habit 으로 상속된다.*/}
        </ul>
        <button className="habits-reset" onClick={this.props.AppOnReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;
