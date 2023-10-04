import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    filename: "",
    filepath: "",
    source: "",
    content: "",
    status: "",
    is_approved: "",
    uploadedby: ""
  });

  const { filename, filepath, source, content, status, is_approved, uploadedby } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/incletter", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Incoming Letter</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="file_name" className="form-label">
                File Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter File Name"
                name="filename"
                value={filename}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="file_path" className="form-label">
                File Path
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter File Path"
                name="file_path"
                value={filepath}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="source" className="form-label">
                Source
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter From File Come From"
                name="source"
                value={source}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                Content
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter What is File About"
                name="content"
                value={content}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status (Progress Status)
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter File Progress Status"
                name="status"
                value={status}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="is_approved" className="form-label">
                Is Approved
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=""
                name="is_approved"
                value={is_approved}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="recorded_by" className="form-label">
                Recorded By
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Loged in User name will come here"
                name="uploadedby"
                value={uploadedby}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
