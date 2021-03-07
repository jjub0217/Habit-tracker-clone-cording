import React, { Component } from "react";

class Habit extends Component { // <- Habit 이라는 li
  /* 부모 컴포넌트로부터 전달받은 props 들로, 자식 컴포넌트들도 핸들링 할것이기 때문에, 자식 컴포넌트 안에는 
     멤버변수와 멤버 함수가 있을 필요가 없다. */ 
  //┌---// state : 멤버변수
  //│ //
  //│ // state = {
  //│ //   count: 0,
  //│ // };
  //│ 
  //└--- // };



  // 이벤트가 발생하면 동작하는 것(콜백함수)들을 부모 컴포넌트로부터 전달받을것이다.
  handleIncrement  = () => {
    console.log(this.props);
    // console.log(event); // SyntheticBaseEvent
    //  ┌ state 객체 안의 count 라는 프로퍼티의 값을 증가시키면서 state 를 업데이트 시켜야 한다.
    this.setState({ count: this.state.count + 1 }); // : setState 메서드의 인수로 새로운 객체를 전달해줬다.
    //  왜 this.state.count++ 를 안해줬나?
    // ==> 그렇게 하게 되면 React 는 state 가 업데이트 됬는지 안됐는지 모른다.
    //     그래서 state 를 업데이트 할때에는, setState 메서드를 사용해서 전체적인 state 를 업데이트 해줘야 한다.
    //     그래야, React 는 State 가 업데이 된 것을 알게되서, render 함수를 호출하게 된다.
  };

  handleDecrement = () => {
    console.log(this.props);
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 }); // : setState 메서드의 인수로 새로운 객체를 전달해줬다.
        console.log(this.state.count);
      }
  };


  handleDelete = () => {

  }
  
  render() {
    console.log(this.props); 
    /* └ propHabit{name: 'Reading', count: 0} /  propHabit{name: 'Running', count: 0} / propHabit{name: 'Coding', count: 0}  */
    console.log(this.props.propHabit);
    /* {name: 'Reading', count: 0} / {name: 'Running', count: 0} / {name: 'Coding', count: 0}  */

    const {name, count} = this.props.propHabit;
    // this.props.propHabit : 배열 habits 의 요소들 중에 하나의 요소 ( { name : 'Running', count : 0 } ) 
    // │ 여기서 name 이랑 count 라는 프로퍼티 키와 같은 이름의 변수를 선언해서 값을 뽑아온다.
    // │ name = 'Running' count = 0

    return (
      <li className="habit">

        {/* <span className="habit-name">{Reading}</span> */}
        <span className="habit-name">{name}</span>

        {/* <span className="habit-count">{this.state.count}</span> */}
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button 
         className="habit-button habit-delete"
         onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
