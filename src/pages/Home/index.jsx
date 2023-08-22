import { Card } from "../../components/Card";
import { HomeStyle } from "./styles";
import { Header } from "../../components/Header";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/breed.provider";

export const Home = () => {
  const { data, setCurrentPage, currentPage } = useContext(AuthContext);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentValue) => currentValue + 1);
      }
    });
    intersectionObserver.observe(document.querySelector("#sentinela"));
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <>
      <Header />
      <HomeStyle>
        <div className="hd"></div>
        <div className="container">
          <ul>
            {data?.map((cat) => (
              <Card key={cat.id} url={cat.url} text={cat.id} />
            ))}
            <li id="sentinela"></li>
          </ul>
        </div>
      </HomeStyle>
    </>
  );
};
