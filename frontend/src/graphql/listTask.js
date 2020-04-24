export default `query {
  listTask {
		list {
      id
      is_completed
      title
      created_at
      updated_at
    }
  }
}`;
