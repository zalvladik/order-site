import ContainerBox from "src/components/ContainerBox";
import ReactPlayer from "react-player";

const ContainerVideo = (): JSX.Element => {
  return (
    <ContainerBox
      sx={{
        paddingTop: "20px",
        paddingBottom: "20px",
        borderColor: "white",
        borderTop: 1,
        borderBottom: 1,
      }}
    >
      <ReactPlayer
        url="https://youtube.com/shorts/s9roRQp7Npw?si=WbYiGfI6HBqaKtws"
        controls={true}
        width="100%"
        border
      />
    </ContainerBox>
  );
};

export default ContainerVideo;
