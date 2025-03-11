import { bowler } from "./types/bowler";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch("https://localhost:5000/api/BowlingLeague");
      const data = await response.json();
      setBowlers(data); //update foods array
    };
    fetchFood();
  }, []);

  return (
    <>
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>First Name </th>
            <th>Middle Initial </th>
            <th>Last Name </th>
            <th>Team Name </th>
            <th>Address</th>
            <th>City </th>
            <th>State </th>
            <th>Zip </th>
            <th>Phone Number </th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>{b.bowlerFirstName}</td>
              <td>{b.bowlerMiddleInit}</td>
              <td>{b.bowlerLastName}</td>
              <td>{b.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
