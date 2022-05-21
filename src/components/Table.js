import "./Table.css";

const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Nama</td>
          <td>Program</td>
          <td>Wave</td>
        </tr>
      </thead>

      <tbody>
        {props.students.map((item, key) => {
          return (
            <tr key={key}>
              <td>{item.name}</td>
              <td>{item.program}</td>
              <td>{item.wave}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
