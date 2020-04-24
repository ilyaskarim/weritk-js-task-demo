export default `mutation ($input: TaskInput) {
  createTask(input: $input) {
    id
    is_completed
    title
    created_at
    updated_at
  }
}`;
