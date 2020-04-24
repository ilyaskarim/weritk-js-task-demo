export default `mutation deleteTask($id: Int) {
  deleteTask(input: {id: $id}) {
		message
  }
}`;
