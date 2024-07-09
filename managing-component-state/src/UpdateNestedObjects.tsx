import { useState } from "react";

function UpdateNestedObjects() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94211 },
    });
  };

  return (
    <div>
      {customer.name} - {customer.address.city}, {customer.address.zipCode}
    </div>
  );
}

export default UpdateNestedObjects;
