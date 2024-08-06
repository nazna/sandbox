export const TodoCreator = () => {
  return (
    <form className="creator">
      <div className="body">
        <input type="text" placeholder="Task name" />
      </div>
      <div className="footer">
        <button type="button" className="cancel">
          Cancel
        </button>
        <button type="button" className="create">
          Add task
        </button>
      </div>
    </form>
  );
};
