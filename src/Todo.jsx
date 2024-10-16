// export default function Todo({ task, isDone }) {
//   return <li>Task: {task}</li>;
// }

//Conditional rendering option - 01
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li> {task} : Finished  </li>;
//   } else {
//     return <li> {task} : Work on </li>;
//   }
// }

//Conditional rendering option - 02
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li> Finished : {task} </li>;
//   }
//   return <li> Work on : {task} </li>;
// }

//Conditional rendering option - 03 using ternary operator
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {" "}
//       {isDone ? "Finished : " : "Work on : "} {task}{" "}
//     </li>
//   );
// }

//Conditional rendering option - 04 : and operator &&
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {" "}
//       {task} {isDone && " : Done"}{" "}
//     </li>
//   );
// }

//Conditional rendering option - 05 : or operator  ||
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {" "}
//       {task} {isDone || " : Do it"}{" "}
//     </li>
//   );
// }

//Conditional rendering option - 06
export default function Todo({ task, isDone }) {
  let listItem;
  if (isDone) {
    listItem = <li> Finished : {task} </li>;
  } else {
    listItem = <li> Work on : {task} </li>;
  }
  return listItem;
}
