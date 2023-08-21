import { Helmet } from "react-helmet";
import MuiIcon from "../assets/mui.svg";
import {
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  AlignHorizontalCenter,
  AlignHorizontalLeft,
  AlignHorizontalRight,
  SendAndArchiveRounded,
  SendAndArchiveTwoTone,
  SettingsVoiceOutlined,
} from "@mui/icons-material";
import { theme } from "../theme";
import SideBar from "../components/home/SideBar";
import RightBar from "../components/home/RightBar";
import Feed from "../components/home/Feed";
import TypographyComponent from "../components/Typography";

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

      <TypographyComponent />

      <Stack direction="row" spacing={2}>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained" size="small" color="warning">
          Warning Contained
        </Button>
        <Button variant="text">Text</Button>
        <Button
          variant="outlined"
          color="error"
          endIcon={<SendAndArchiveRounded />}
          disableElevation
          disableRipple
        >
          Text
        </Button>
        <IconButton>
          <SendAndArchiveTwoTone />
        </IconButton>
      </Stack>
      <ButtonGroup variant="outlined">
        <IconButton>
          <AlignHorizontalLeft />
        </IconButton>
        <IconButton>
          <AlignHorizontalCenter />
        </IconButton>
        <IconButton>
          <AlignHorizontalRight />
        </IconButton>
      </ButtonGroup>
    </>
  );
};

export default Home;
