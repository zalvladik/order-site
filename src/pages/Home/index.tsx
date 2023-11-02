import FormOrder from "src/components/Forms/FormOrder";
import ContainerPhoto from "src/components/ContainerPhoto";
import Header from "src/components/Header";
import TextList from "src/components/TextList/Index";
import ContainerVideo from "src/components/ContainerVideo";
import PromouteContainer from "src/components/PromouteContainer";
import ContainerBox from "src/components/ContainerBox";
import Title from "src/components/Title";
import SwiperPhotos from "src/components/SwiperPhotos";

import { photoParams, photoConsumerReviews } from "src/constants";
import { positiveRisons, params } from "src/constants";
import { ContainerHome } from "./styles";

const Home = () => {
  return (
    <ContainerHome>
      <Header></Header>
      <ContainerPhoto url="src/assets/photos/2.jpg">
        <PromouteContainer />
      </ContainerPhoto>
      <ContainerBox>
        <Title
          sx={{
            fontWeight: 700,
            fontSize: "35px",
            marginTop: "20px",
            color: "gold",
          }}
        >
          Переваги
        </Title>
      </ContainerBox>
      <TextList list={positiveRisons} />
      <SwiperPhotos arrayPhotos={photoParams} />
      <ContainerBox>
        <Title
          sx={{
            fontWeight: 700,
            fontSize: "35px",
            marginTop: "20px",
            color: "gold",
          }}
        >
          Характеристики
        </Title>
      </ContainerBox>
      <TextList list={params} />
      <ContainerVideo />
      <FormOrder />
      <SwiperPhotos arrayPhotos={photoConsumerReviews}>
        <Title
          sx={{
            fontWeight: 700,
            fontSize: "35px",
            marginBottom: "20px",
            color: "gold",
          }}
        >
          Відгуки
        </Title>
      </SwiperPhotos>
      <ContainerBox sx={{ paddingBottom: "40px", paddingTop: "40px" }}>
        <Title
          sx={{
            fontWeight: 500,
            fontSize: "20px",
            marginTop: "20px",
            color: "white",
            textShadow: "0px 0px 20px rgba(233,229,14,0.85)",
          }}
        >
          Гарантуємо конфіденційність ваших даних
        </Title>
        <Title
          sx={{
            fontWeight: 500,
            fontSize: "20px",
            marginTop: "20px",
            color: "white",
            textShadow: "0px 0px 20px rgba(233,229,14,0.85)",
          }}
        >
          Графік роботи 9:00-23:00
        </Title>
      </ContainerBox>
    </ContainerHome>
  );
};

export default Home;
