// class Habit extends Component { 

//     handleIncrease = () => {


//         console.log(this.props); 


//       this.props.onIncrement(this.props.propHabit) 


//     }


//   render() {

//     return (

//         <button
//             className="habit-button habit-increase"
//             onClick={this.handleIncrease}>  
//         <i className="fas fa-plus-square"></i>
//         </button>

//         )

//     }

// }



// class Habits extends Component {

//     state = {
//         habits : [{id : 1, name: 'Reading', count: 0}, 
//                   {id: 2, name: 'Running', count: 0},
//                   {id: 3, name: 'Coding', count: 0},],
//     }

//     handleIncrement  = (h) => { 

//         console.log(h);


//     };

//     render() {

//         return (

//             <ul>                


//                 {this.state.habits.map(habit => <Habit  key={habit.id} propHabit={habit}  onIncrement={this.handleIncrement} />)}


//             </ul>
//         );
//     }

// }







const state = {
    habits: [{ id: 1, name: '강'},
        { id: 2, name: '이'},
        { id: 3, name: '황'},
    ]
}




// function total() {


//     // 매개변수 h 받는 함수
//     function A(h) {
//         console.log(h);
//         const copy = [...state.habits]
//         const i = copy.indexOf(h)
//         console.log(i);
//     }


// }

(function total() {

    function B(h) {
        console.log(h);
        const copy = [...state.habits]
        const i = copy.indexOf(h)
        // console.log(i);

    }
    // B(propHabit);


    // render 함수
    const render = () => {

        const Habi = state.habits.map(habit => 
            function (habit){
                return habit;
            }
        )

    }

})();

function different() {
   return render();

}
const propHabit = render(); // propHabit;
console.log(propHabit);