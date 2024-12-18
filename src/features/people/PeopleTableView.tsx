import { Person } from "./peopleTypes.ts";

interface Props {
  people: Array<Person>;
}

export const PeopleTableView = ({ people }: Props) => (
  <div className="container">
    <h2 className="header">Star Wars Characters</h2>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair Color</th>
          <th>Skin Color</th>
          <th>Eye Color</th>
          <th>Birth Year</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person.name}>
            <td>{person.name}</td>
            <td>{person.height}</td>
            <td>{person.mass}</td>
            <td>{person.hair_color}</td>
            <td>{person.skin_color}</td>
            <td>{person.eye_color}</td>
            <td>{person.birth_year}</td>
            <td>{person.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
