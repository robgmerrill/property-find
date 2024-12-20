const AddPropertyPage = async ({ params }) => {
  const { id } = await params;
  return <div>Add Property Page {params.id}</div>;
};

export default AddPropertyPage;
