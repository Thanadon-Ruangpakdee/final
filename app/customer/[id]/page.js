// app/customer/[id]/page.js
"use client"; // Mark this component as a Client Component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Change this import

export default function CustomerDetail() {
  const router = useRouter(); // Now using next/navigation

  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = router.query; // Assuming `id` is part of the query parameters

  useEffect(() => {
    // Fetch customer details based on the `id`
    const fetchCustomer = async () => {
      try {
        const response = await fetch(`/api/customers/${id}`);
        const data = await response.json();
        setCustomer(data);
      } catch (error) {
        console.error("Error fetching customer:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCustomer();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!customer) {
    return <div>No customer found.</div>;
  }

  return (
    <div>
      <h1>Customer Detail</h1>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      {/* Render other customer details */}
    </div>
  );
}