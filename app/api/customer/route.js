import Customer from "@/models/Customer"; // Your Customer model

// Connect to the database
const connectDb = async () => {
  await dbConnect();
};

// GET all customers
export async function GET() {
  try {
    await connectDb();
    const customers = await Customer.find(); // Fetch all customers
    return new Response(JSON.stringify(customers), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    return new Response(JSON.stringify({ message: "Error fetching customers" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// POST a new customer
export async function POST(request) {
  try {
    await connectDb();
    const body = await request.json(); // Parse the request body
    const newCustomer = new Customer(body); // Create a new customer
    await newCustomer.save(); // Save to the database
    return new Response(JSON.stringify(newCustomer), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error creating customer:", error);
    return new Response(JSON.stringify({ message: "Error creating customer" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// PATCH (Update) a customer by ID
export async function PATCH(request, { params }) {
  const { id } = params; // Get the customer ID from the URL
  try {
    await connectDb();
    const body = await request.json(); // Parse the request body
    const updatedCustomer = await Customer.findByIdAndUpdate(id, body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the updated document against the schema
    });
    if (!updatedCustomer) {
      return new Response(JSON.stringify({ message: "Customer not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    return new Response(JSON.stringify(updatedCustomer), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error updating customer:", error);
    return new Response(JSON.stringify({ message: "Error updating customer" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// DELETE a customer by ID
export async function DELETE(request, { params }) {
  const { id } = params; // Get the customer ID from the URL
  try {
    await connectDb();
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    if (!deletedCustomer) {
      return new Response(JSON.stringify({ message: "Customer not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    return new Response(JSON.stringify({ message: "Customer deleted successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error deleting customer:", error);
    return new Response(JSON.stringify({ message: "Error deleting customer" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}