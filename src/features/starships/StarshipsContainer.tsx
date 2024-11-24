import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
//
import List from "../../components/List.tsx";
//
import { fetchStarshipsData } from "./starshipsService.ts";
import { Starship } from "./starshipTypes.ts";
import { starshipsState } from "./starshipsAtom.ts";

const StarshipsContainer: React.FC = () => {
  const [starships, setStarships] = useRecoilState<Array<Starship>>(starshipsState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStarshipsData();
        setStarships(data);
      } catch (error) {
        console.error("Error fetching starships data:", error);
      }
    };

    fetchData().then(() => console.log("Data fetched"));
  }, [setStarships]);

  return <List<Starship>
      header={<h2>List of starships</h2>}
      items={starships}
      renderItem={(starship: Starship) => `${starship.name} --- ${starship.manufacturer}`}
      empty={<p>No starships available</p>}
  />;
};

export default StarshipsContainer;
