import { AppBar, Input, Toolbar, Typography, styled } from "@mui/material";
import { theme } from "../../theme";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled(Input)({});

const Header = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* sx={{display : {xs : 'none', sm: "block"}}} */}
        <Typography variant="h6">KiloGram</Typography>
        <Search sx={{ bgcolor: theme.palette.secondary.main }} />
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
