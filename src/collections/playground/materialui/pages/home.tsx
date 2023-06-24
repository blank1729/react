import { Helmet } from "react-helmet";
import MuiIcon from "../assets/mui.svg";
import { Button, Container, Typography } from "@mui/material";
import { SettingsVoiceOutlined } from "@mui/icons-material";
import { theme } from "../theme";
import SideBar from "../components/home/SideBar";
import RightBar from "../components/home/RightBar";
import Feed from "../components/home/Feed";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Material UI</title>
        <link rel="icon" href={MuiIcon} type="image/svg" />
      </Helmet>
      <Container sx={{ bgcolor: theme.palette.secondary.main }}>
        <Typography variant="h3">Material UI</Typography>
        <Button variant="contained" startIcon={<SettingsVoiceOutlined />}>
          Something
        </Button>
        <SideBar />
        <Feed />
        <RightBar />
      </Container>
    </>
  );
};

export default Home;
