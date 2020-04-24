export default `mutation CompleteTask($id: Int, $is_completed: Int) {
  updateTask(input: { is_completed: $is_completed, id: $id }) {
    id
    is_completed
    title
    created_at
    updated_at
  }
}
`;
