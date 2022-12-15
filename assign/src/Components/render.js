import { useState } from "react";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import "./render.css";

export default function App() {
  const initialState = [];

  const [employees, setEmployees] = useState(initialState);
  const [message, setMessage] = useState([0, 0, 0, 0]);
  const [isDisabled, setisDisabled] = useState([false, false, false, false]);
  const [value, setValue] = useState("Select");
  // ✅ Add an object to a state array
  const handleClick = () => {
    if (
      !(!isDisabled[0] && !isDisabled[1] && !isDisabled[2] && !isDisabled[3])
    ) {
      let list1 = [0, 0, 0, 0];
      let res = 0;
      let ind = 0;
      for (let i = 0; i < 4; i++) {
        if (message[i] !== "") {
          res = message[i];
          ind = i;
          list1[i] = message[i];
          break;
        }
      }
      for (let i = 0; i < 4; i++) {
        if (i !== ind) {
          list1[i] = Math.floor(
            Math.random() * parseInt(res) +
              101 -
              (parseInt(res) - 100) +
              parseInt(res) -
              100
          );
        }
      }
      setMessage((current) => [...list1]);
      setisDisabled((current) => [false, false, false, false]);
    }

    // implementation details
  };
  const handleReset = () => {
    let deflist = [0, 0, 0, 0];
    setMessage((current) => [...deflist]);
    setisDisabled((current) => [false, false, false, false]);
    // implementation details
  };
  const handleChange = (event, index) => {
    let list1 = [false, false, false, false];
    let list2 = ["", "", "", ""];
    if (event.target.value !== "") {
      list1 = [true, true, true, true];
      list1[index] = false;
      list2[index] = event.target.value;
    }
    setisDisabled((current) => [...list1]);

    const list = [...employees];
    setMessage((current) => [...list2]);

    console.log("value is:", event.target.value);
  };
  const addObjectToArray = (obj) => {
    setEmployees((current) => [...obj]);
  };

  return (
    <MDBCard>
      <MDBCardBody>
        <div>
          <div className="dropdown" id="asd">
            <select
              onChange={(e) => {
                setMessage((current) => [0, 0, 0, 0]);
                setisDisabled((current) => [false, false, false, false]);
                setValue(e.target.value);
                if (e.target.value === "Jan-Apr") {
                  addObjectToArray(["Jan", "Feb", "Mar", "Apr"]);
                } else if (e.target.value === "May-Aug") {
                  addObjectToArray(["May", "Jun", "Jul", "Aug"]);
                } else if (e.target.value === "Sep-Dec") {
                  addObjectToArray(["Sep", "Oct", "Nov", "Dec"]);
                } else {
                  addObjectToArray([]);
                }
              }}
            >
              <option value="Select">Select</option>

              <option value="Jan-Apr">Jan-Apr</option>

              <option value="May-Aug">May-Aug</option>

              <option value="Sep-Dec">Sep-Dec</option>
            </select>
          </div>

          {employees &&
            employees.map((employee, index) => {
              return (
                <div className="form-check" key={index}>
                  <label className="form-check-label ms-2">{employee}:</label>

                  <input
                    type="number"
                    onChange={(e) => handleChange(e, index)}
                    value={message[index]}
                    disabled={isDisabled[index]}
                  />
                </div>
              );
            })}
        </div>
      </MDBCardBody>

      {value !== "Select" && (
        <button className="button" type="button" onClick={handleClick}>
          Calculate
        </button>
      )}
      {value !== "Select" && (
        <button className="button" type="button" onClick={handleReset}>
          Reset
        </button>
      )}
    </MDBCard>
  );
}
