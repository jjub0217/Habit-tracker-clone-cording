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
    console.log(h);

      // ↓ 전달된 습관의 count 를 증가시켜야 한다.
      // h.count++;
      // this.setState(this.state) // <- 그냥 state 자체 를 업데이트 시키는 거 : 이거 하지말자. React 에서는 State 객체를 직접 수정하는 건 좋지 않다. ===> 얕은 복사를 해서, 복사물 가지고 수정하자.
    const copyHabits = [...this.state.habits];
    const i = copyHabits.indexOf(h);

    copyHabits[i].count++;
    this.setState({ habits: copyHabits });
  };

  AppHandleDecrement = (h) => {
    console.log(h);
    const copyHabits = [...this.state.habits];
    const i = copyHabits.indexOf(h);

    if (copyHabits[i].count > 0) {
      copyHabits[i].count--;
      this.setState({ habits: copyHabits });
    }
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
    const copyHabits = [...this.state.habits, {id: Date.now(), name: h, count: 0}]; 
    // └> 스프레드 문법 사용한 거 뒤에 ',' 를 쓰고, 기존의 habit 과 같은 형태로 새로운 habit 을 쓰면, 기존 배열과 새로운 배열이 병합이 된다.  
    
    this.setState({habits: copyHabits});
  } 

  AppHandleReset = () => {
    // ┌ count 를 0 으로 리셋
    const resetHabits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit
    } ); 

    this.setState({habits: resetHabits})
  }

  render() {
    return (
      <>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
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
