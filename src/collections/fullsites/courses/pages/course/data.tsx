import Card from "../../components/Card";

function withdata() {
  const courses = [
    {
      id: "cs253",
      thumbnail: "",
      lectures: "",
      name: "Web Security",
      taughtby: "Freoss",
    },
    {
      id: "cs253",
      thumbnail: "",
      lectures: "",
      name: "MIT ALgorithms",
      taughtby: "Freoss",
    },
  ];
  return (
    <>
      <h1>Course with data page11</h1>
      {courses.map((course) => (
        <Card id={course.name} key={course.id} />
      ))}
    </>
  );
}

export default withdata;
