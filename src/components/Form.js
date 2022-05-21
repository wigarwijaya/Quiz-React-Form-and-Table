import "./Form.css";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [program, setProgram] = useState("");
  const [wave, setWave] = useState("");

  const nameOnChangeHandle = (event) => {
    setName(event.target.value);
  };

  const programOnChangeHandle = (event) => {
    setProgram(event.target.value);
  };
  const waveOnChangeHandle = (event) => {
    setWave(event.target.value);
  };

  const onSubmit = () => {
    Event.preventDefault();

    const data = {
      name: name,
      program: program,
      wave: wave,
    };

    props.onAddStudent(data);
  };

  return (
    <form className="form__controls" onSubmit={onSubmit}>
      <div className="form__control">
        <label>Nama</label>
        <input type="text" onChange={nameOnChangeHandle}></input>
      </div>
      <div className="form__control">
        <label>Program</label>
        <input type="text" onChange={programOnChangeHandle}></input>
      </div>
      <div className="form__control">
        <label>Wave</label>
        <input type="text" onChange={waveOnChangeHandle}></input>
      </div>

      <button type="submit" className="form__actions">
        Submit
      </button>
    </form>
  );
};

export default Form;
