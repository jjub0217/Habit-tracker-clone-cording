import React, { Component } from "react";
import "./app.css";
import Habits from "./component/habits";
import Navbar from "./component/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  AppHandleIncrement = (h) => {
    console.log(h); // {id: ..., name: ..., count : 0} propHabit

    // const copyHabits = [...this.state.habits];
    // const i = copyHabits.indexOf(h);

    // copyHabits[i].count++;

    const habits = this.state.habits.map(habit => {
      if(habit.id === h.id){ // <- map 돌리는 habit 의 id 가, 우리가 업데이트 해야 하는 habits 배열의 item의 id 와 같다면

      // ┌ count 를 증가시킨 새로운 item을 반환해야 한다.
      // │ map으로 돌아가면서 나오는 기존의 habit item을 하나씩 얕은 복사한 결과물에 count 프로퍼티 키를 뒤에 것으로 덮어 씌울것이다.
        return {...h, count: h.count +1} 
      }
      // ┌ 그렇지 않다면 그냥 habits 을 map 돌려서 반환하는 habit item 을 반환해라.
      return habit;
    })

    this.setState({ habits });
  };


  AppHandleDecrement = (h) => {
    console.log(h);

    // const copyHabits = [...this.state.habits];
    // const i = copyHabits.indexOf(h);

    // if (copyHabits[i].count > 0) {
    //   copyHabits[i].count--;
    //   this.setState({ habits: copyHabits });
    // }

    const habits = this.state.habits.map(habit => {
      if(habit.id === h.id){ // <- map 돌리는 habit 의 id 가, 우리가 업데이트 해야 하는 habits 배열의 item의 id 와 같다면

      // ┌ count 를 감소시킨 새로운 item을 반환해야 한다.
      // │ map으로 돌아가면서 나오는 기존의 habit item을 하나씩 얕은 복사한 결과물에 count 프로퍼티 키를 뒤에 것으로 덮어 씌울것이다.
        const count = h.count -1;
        return {...h, count: count < 0 ? 0 : count}
      }
      // ┌ 그렇지 않다면 그냥 habits 을 map 돌려서 반환하는 habit item 을 반환해라.
      return habit;
    })

    this.setState({ habits });

  };

  AppHandleDelete = (h) => {
    console.log(h);
    const filterHabits = this.state.habits.filter((item) => item.id !== h.id);
    this.setState({ habits: filterHabits });
  };

  AppHandleAdd = (h) => {
    console.log(h); // input-value

    // ┌ 새로운 습관을 State 에 추가해주면 된다.
    // console.log(copyHabits); // [ {...}, {...}, {...} ]
    const copyHabits = [...this.state.habits,{ id: Date.now(), name: h, count: 0 },];
    // └> 스프레드 문법 사용한 거 뒤에 ',' 를 쓰고, 기존의 habit 과 같은 형태로 새로운 habit 을 쓰면, 기존 배열과 새로운 배열이 병합이 된다.

    this.setState({ habits: copyHabits });
  };

  AppHandleReset = () => {

    // ┌ count 를 0 으로 리셋
    // const resetHabits = this.state.habits.map((habit) => {
    //   habit.count = 0;
    //   return habit;
    // });


    const resetHabits = this.state.habits.map(habit => {
      // 이미 0 이라면 리셋을 할 필요가 없으니까

      if(habit.count !== 0){ // <- 0 이 아닐때만 새로운 리턴을 해주고 
        return {...habit, count: 0} // <- 스프레드 문법 사용한거 뒤에 ',' 을 쓰고, 기존의 habit 에 있는 프로퍼티 키를 중복으로 써주면 뒤에꺼로 덮어씌워진다.
      }
      return habit;
      }
    )





    this.setState({ habits: resetHabits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          AppOnIncrement={this.AppHandleIncrement}
          AppOnDecrement={this.AppHandleDecrement}
          AppOnDelete={this.AppHandleDelete}
          AppOnAdd={this.AppHandleAdd}
          AppOnReset={this.AppHandleReset}
        />
      </>
    );
  }
}

export default App;
