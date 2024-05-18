import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { fetchPeopleData } from "./peopleService.ts";
import { Person } from "./peopleTypes.ts";
import { peopleState } from "./peopleAtom.ts";
import { PeopleListView } from "./PeopleListView.tsx";

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

    return () => {
      // Cleanup function
    };
  }, [setPeople]);

  return <PeopleListView people={people} />;
};

export default PeopleContainer;
