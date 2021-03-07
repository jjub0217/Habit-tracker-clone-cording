import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {

    input = React.createRef()

    handleSubmit = (e) =>{
        e.preventDefault();
        
        // console.log(e.target.firstElementChild); // input 태그
        // const inputValue = e.target.firstElementChild.value; // input 의 value
        // console.log(inputValue);
        // └> 리액트에서는, 다른 리액트의 요소에 접근하려면 createRef 메서드를 사용해야 한다. -> createRef 객체 생성됨
        // -> HabitAddForm 컴포넌트가 뷰포트에 그려지면, 미리 input 요소에 inputRef 라는 멤버변수를 연결해놓으면, 연결되어진다. 

        // console.log(this.input); // { current: input.add-input }
        // console.log(this.input.current.value); // 강주현

        const inputValue = this.input.current.value;
        console.log(inputValue); // 강주현
        if(inputValue !== null){
            this.props.HabitsOnAdd(inputValue);
        }else{
            return inputValue;
        }

        this.input.current.value = '';

    }

    render() {

        return (
        <form className="add-form" onSubmit={this.handleSubmit}>
            {/* └  form 태그 안의 button 이 눌려지면, submit 이벤트가 발생한하도록 한다. */}
            {/* └  기본적으로, submit 이벤트가 발생되면 페이지가 초기화 된다. */}
            <input ref={this.input} type="text" className="add-input" placeholder="Habit"/>
            <button className="add-button">Add</button>
        </form>
        );
    }
}

export default HabitAddForm;