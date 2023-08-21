import { Card } from "../../components/Card";

import { useQuery } from "@tanstack/react-query";
import { HomeStyle } from "./styles";
import { Header } from "../../components/Header";
export const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.thecatapi.com/v1/images/search?limit=10").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Header />
      <HomeStyle>
        <div className="hd"></div>
        <div className="container">
          <ul>
            {data?.map((todo) => (
              <Card key={todo.id} url={todo.url} text={todo.id} />
            ))}
          </ul>
        </div>
      </HomeStyle>
    </>
  );
};
