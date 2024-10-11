// app/customers/[id]/page.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CustomerDetail() {
  const router = useRouter();
  const { id } = router.query; // Get the customer ID from the URL
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchCustomer = async () => {
        const response = await fetch(`http://localhost:3000/api/customers/${id}`);
        if (response.ok) {
          const data = await response.json();
          setCustomer(data); // Set the customer details
        } else {
          console.error("Failed to fetch customer");
        }
        setLoading(false); // Set loading to false after fetching
      };
      fetchCustomer();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show loading state while fetching

  if (!customer) return <div>Customer not found.</div>; // Show if customer not found

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Customer Details</h1>
      <div className="mt-4">
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>
        <p><strong>Address:</strong> {customer.address}</p>
        <p><strong>Order:</strong> {customer.order}</p>
      </div>
      <button
        onClick={() => router.back()}
        className="mt-4 bg-gray-800 text-white py-2 px-4 rounded"
      >
        Back to Customer List
      </button>
    </div>
  );
}