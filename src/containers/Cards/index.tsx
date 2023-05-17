import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Cards } from "@/components";
import { BASE_URL } from "@/constants";

const CardsContainer = () => {
  const router = useRouter();
  const query = router.query as { [key: string]: string };
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchData = async (queries: { [key: string]: string }) => {
    try {
      setIsLoading(true);
      let url = `${BASE_URL}/api/sessions`;
      if (Object.keys(queries)) {
        url = url + "?" + new URLSearchParams(queries).toString();
      }
      const response = await fetch(url);
      const data = await response.json();
      setSessions(data?.data);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  useEffect(() => {
    handleFetchData(query);
  }, [query]);

  return <Cards data={sessions} isLoading={isLoading} />;
};

export default CardsContainer;
