"use client"; // Add this directive at the top
import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const response = await fetch("http://localhost:3000/api/customers"); // Your API endpoint
    const data = await response.json();
    setCustomers(data);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this customer?")) {
      await fetch(`http://localhost:3000/api/customers/${id}`, {
        method: "DELETE",
      });
      fetchCustomers();
    }
  };

  const startEdit = (customer) => {
    setCurrentCustomer(customer);
    setEditMode(true);
    reset(customer);
  };

  const handleFormSubmit = async (data) => {
    if (editMode) {
      await fetch(`http://localhost:3000/api/customers/${currentCustomer._id}`, { // Use _id instead of id
        method: "PATCH", // Use PATCH for updating
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setEditMode(false);
      setCurrentCustomer(null);
    } else {
      await fetch("http://localhost:3000/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
    reset();
    fetchCustomers();
  };

  return (
    <div className="container">
      <h1>Customers Management</h1>

      {/* Form to add or update customer */}
      <form className="customer-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type="text"
          placeholder="Customer Name"
          {...register("name", { required: true })}
        />
        <input
          type="email"
          placeholder="Customer Email"
          {...register("email", { required: true })}
        />
        <button type="submit" className="submit-button">
          {editMode ? "Update Customer" : "Add Customer"}
        </button>
      </form>

      {/* List box of customers */}
      <h2>Select a Customer</h2>
      <select className="customer-select" onChange={(e) => {
        const selectedCustomer = customers.find(c => c._id === e.target.value); // Use _id
        if (selectedCustomer) {
          startEdit(selectedCustomer);
        }
      }}>
        <option value="">-- Select a Customer --</option>
        {customers.map((customer) => (
          <option key={customer._id} value={customer._id}> {/* Use _id */}
            {customer.name}
          </option>
        ))}
      </select>

      {/* List of customers with edit and delete buttons */}
      <h2>Customer List</h2>
      <ul className="customer-list">
        {customers.map((customer) => (
          <li key={customer._id} className="customer-item"> {/* Use _id */}
            <Link href={`http://localhost:3000/api/customers/${customer._id}`} className="customer-link">{customer.name}</Link>
            <div className="button-group">
              <button className="edit-button" onClick={() => startEdit(customer)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(customer._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          background: #fff;
        }

        h1, h2 {
          color: #333;
        }

        .customer-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        .submit-button {
          padding: 10px;
          border: none;
          border-radius: 5px;
          background-color: #0070f3;
          color: white;
          cursor: pointer;
        }

        .submit-button:hover {
          background-color: #005bb5;
        }

        .customer-select {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-bottom: 20px;
        }

        .customer-list {
          list-style-type: none;
          padding: 0;
        }

        .customer-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }

        .button-group {
          display: flex;
          gap: 10px;
        }

        .edit-button, .delete-button {
          padding: 5px 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .edit-button {
          background-color: #ffeb3b;
        }

        .edit-button:hover {
          background-color: #fdd835;
        }

        .delete-button {
          background-color: #f44336;
          color: white;
        }

        .delete-button:hover {
          background-color: #e53935;
        }

        .customer-link {
          text-decoration: none;
          color: #0070f3;
        }

        .customer-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}