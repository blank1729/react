// import { Suspense } from "react";
import Albums from "../components/suspense/Albums";

export default function ArtistPage() {
  return (
    <>
      <h1>Users</h1>
      <Albums />
      {/* <Suspense fallback={<Loading />}></Suspense> */}
    </>
  );
}

// function Loading() {
//   return <h2>🌀 Loading...</h2>;
// }
