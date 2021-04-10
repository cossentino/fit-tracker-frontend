import React from 'react'
import { formatDate, capitalizeWord } from '../library'

const Workout = props => {

  const myWorkout = props.workout.attributes
  
  return (
    <div>
      <div class="col s4 m4" style={{display: 'inline'}}>
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
                <span className="card-title">{`${capitalizeWord(myWorkout.workout_type)} - ${formatDate(myWorkout.date)}`}</span>
                <p>Miles: {myWorkout.miles}</p>
                <p>Perceived Exertion: {myWorkout.exert}</p>
                <p>Pace: {myWorkout.pace}</p>
                <p>Notes: {myWorkout.notes}</p>
            </div>
            <div class="card-action">
              <button 
                className="btn" 
                onClick={() => {
                  props.delete(props.workout.id)
                }}
              >Delete Workout</button>
            </div>
          </div>
        </div>
      </div>
    </div>        
  )
}



export default Workout





// const test = () => {
//   return (
//     <div class="col s12 m7">
//       <div class="card horizontal">
//        <div class="card-image">
//          <img src="https://lorempixel.com/100/190/nature/6" alt="test"/>
//       </div>
//       <div class="card-stacked">
//         <div class="card-content">
//           <span className="card-title">{`${capitalizeWord(myWorkout.workout_type)} - ${formatDate(myWorkout.date)}`}</span>
//             <p>Miles: {myWorkout.miles}</p>
//             <p>Perceived Exertion: {myWorkout.exert}</p>
//             <p>Pace: {myWorkout.pace}</p>
//             <p>Notes: {myWorkout.notes}</p>
//         </div>
//         <div class="card-action">
//           <button 
//             className="btn" 
//             onClick={() => {
//               props.delete(props.workout.id)
//             }}
//           >Delete Workout</button>
//         </div>
//       </div>
//     </div>
//   </div>

//   )
// }