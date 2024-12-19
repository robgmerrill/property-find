type AddPropertyPage = {
  params: {
    id: string;
  };
};

const AddPropertyPage = async ({ params }: AddPropertyPage) => {
  const { id } = await params;
  return <div>Add Property Page {params.id}</div>;
};

export default AddPropertyPage;
