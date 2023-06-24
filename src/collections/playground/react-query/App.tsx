import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeLink from "../../common/components/common/homelink";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
        <ReactQueryDevtools />
      </QueryClientProvider>
      <HomeLink />
    </>
  );
};

export default App;
