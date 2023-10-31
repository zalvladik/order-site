import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { SwiperBox } from "./styles";
import { SwiperPhotosProps } from "./types";
import ContainerPhoto from "../ContainerPhoto";

const SwiperPhotos = ({ children, arrayPhotos }: SwiperPhotosProps) => {
  return (
    <SwiperBox>
      {children}
      <Swiper spaceBetween={30}>
        {Array.from(arrayPhotos).map((url) => (
          <SwiperSlide key={url} style={{ width: "400px" }}>
            <ContainerPhoto url={url} />
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </SwiperBox>
  );
};

export default SwiperPhotos;
