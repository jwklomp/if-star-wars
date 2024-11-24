import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Else, If, Then } from "react-if";
import { isNotNil } from "ramda";
//
import { fetchPeopleData } from "./peopleService.ts";
import { Person } from "./peopleTypes.ts";
import { peopleState } from "./peopleAtom.ts";
import { PeopleTableView } from "./PeopleTableView.tsx";

const PeopleContainer: React.FC = () => {
  const [people, setPeople] = useRecoilState<Array<Person>>(peopleState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPeopleData();
        setPeople(data);
      } catch (error) {
        console.error("Error fetching people data:", error);
      }
    };

    fetchData().then(() => console.log("Data fetched"));
  }, [setPeople]);

  return (
    <If condition={isNotNil(people)}>
      <Then>
        <PeopleTableView people={people} />
      </Then>
      <Else>
        <p>Loading data...</p>
      </Else>
    </If>
  );
};

export default PeopleContainer;
