import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Helmet } from "react-helmet";
import HomeLink from "../../common/components/common/homelink";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>Something</title>
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
      <HomeLink />
    </QueryClientProvider>
  );
};

export default App;
