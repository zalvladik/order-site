import { Stack } from "@mui/material";

const LoaderContainer = (): JSX.Element => {
  return (
    <Stack
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
      alignItems="center"
      justifyContent="center"
    >
      Loading...
    </Stack>
  );
};

export default LoaderContainer;
