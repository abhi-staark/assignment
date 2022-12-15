import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import WidgetRender from "./Components/render";
import { MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";
import "./App.css";

function App() {
  const [y2021, setY2021] = useState(false);
  const [y2022, setY2022] = useState(false);

  const [y2023, setY2023] = useState(false);

  // useEffect(() => {
  //   setYears(yearsLabel);
  // }, []);
  const handle2021 = (e) => {
    setY2021(!y2021);
  };
  const handle2022 = (e) => {
    setY2022(!y2022);
  };
  const handle2023 = (e) => {
    setY2023(!y2023);
  };

  return (
    <div className="container my-3" style={{ width: "500px" }}>
      <MDBCard className="cardbody">
        <MDBCardBody>
          <form className="form w-100">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="2021"
                checked={y2021 || false}
                onChange={handle2021}
              />
              <label className="form-check-label ms-2">2021</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="2022"
                checked={y2022 || false}
                onChange={handle2022}
              />
              <label className="form-check-label ms-2">2022</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="2023"
                checked={y2023 || false}
                onChange={handle2023}
              />
              <label className="form-check-label ms-2">2023</label>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
      <div className="arrange">
        <div className="c21">
          {y2021 && (
            <div>
              <h2>2021</h2>
              <WidgetRender />
            </div>
          )}
        </div>
        <div className="c21">
          {y2022 && (
            <div>
              <h2>2022</h2>
              <WidgetRender />
            </div>
          )}
        </div>

        <div className="c21">
          {y2023 && (
            <div>
              <h2>2023</h2>
              <WidgetRender />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
