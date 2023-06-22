const Todo = () => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" />
        {/* <select name="status" id="todoStatus" onChange={}>
            <option value="true">yes</option>
            <option value="false">no</option>
        </select> */}
      </form>
    </>
  );
};

export default Todo;
