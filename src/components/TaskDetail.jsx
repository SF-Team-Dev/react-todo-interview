import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

// Component that handle the alert with the details on the task and also child of EditableTaskName component

function TaskDetail(props) {
  const [show, setShow] = useState(true);

  return (
    <div>
      {/* name must change after editing but... still does not */}
      <Alert className="col sm={12}" show={show} variant="success">
        {"id :"} {props.task.id[2]}
        <br />
        {"name :"} {props.task.name}
        <div className="d-flex justify-content-end">
          <Button
            type="button"
            onClick={() => setShow(false)}
            variant="outline-success"
          >
            Close
          </Button>
        </div>
      </Alert>
      {!show && (
        <Button variant="outline-success" onClick={() => setShow(true)}>
          Click Me
        </Button>
      )}
    </div>
  );
}

export default TaskDetail;


//   name must change after editing but... this does not !

// function TaskDetail(props) {
//   const [show, setShow] = useState(true);
//   const [task, setTask] = useState({});
//   let tasks = useSelector((state) => state);

//   useEffect(() => {

//     console.log('console.log de TASK', task);
//     console.log('console.log de PROPSTask', props.task);
//     console.log('console.log de id', props.task.id);

//     setTask(tasks.find(one => one.id === props.task.id))
//   }, [props.task]);
//   return (
//     <div>
//       <Alert className="col sm={12}" show={show} variant="success">
//         {"id :"} {task.id[2]}
//         <br />
//         {"name :"} {task.name}
//         <div className="d-flex justify-content-end">
//           <Button
//             type="button"
//             onClick={() => setShow(false)}
//             variant="outline-success">
//             Close
//           </Button>
//         </div>
//       </Alert>
//       {!show && (
//         <Button variant="outline-success" onClick={() => setShow(true)}>
//           Click Me
//         </Button>
//       )}
//     </div>
//   );
// }
