// import { useState } from "react";
// import React from "react";

// export default function Note(props) {
// // let [titleName, setTitle]=useState("");
// // let  [contentName, setcontent]=useState("");
//   const handleClick = () => {
//     props.onDelete(props.id);
//   };
// let titleName = props.title;
// let contentName = props.content;
// console.log(titleName);
//   return (
//     <div className="note">
//       <h1>{props.title}</h1>
//       <p>{props.content}</p>
//       <button onClick={handleClick}>Delete</button>
//     </div>
//   );
  
// };

// export {titleName, contentName} from "./Note.jsx";

import { useState } from "react";
import React from "react";

export default function Note(props) {
  const [titleName, setTitle] = useState(props.title);
  const [contentName, setContent] = useState(props.content);
  
  

  const handleClick = () => {
    props.onDelete(props.id);
  };
  const getPropsValue = (props) => {
     return [titleName,contentName]
     
  }
  return (
    <div className="note">
      <h1>{titleName}</h1>
      <p>{contentName}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};