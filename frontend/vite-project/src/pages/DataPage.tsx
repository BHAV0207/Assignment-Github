import React, { useEffect, useState } from "react";

const DataPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Submitted Users
        </h2>

        {/* Loading */}
        {loading && (
          <p className="text-gray-500 text-center">Loading data...</p>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-500 text-center font-medium">{error}</p>
        )}

        {/* Empty State */}
        {!loading && !error && data.length === 0 && (
          <p className="text-gray-500 text-center">
            No data found in database.
          </p>
        )}

        {/* Data List */}
        <ul className="divide-y">
          {data.map((item) => (
            <li
              key={item._id}
              className="py-4 flex justify-between items-center"
            >
              <div>
                <p className="font-medium text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">{item.email}</p>
              </div>
              <span className="text-sm text-gray-600">
                Age: {item.age}
              </span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="mt-8 flex justify-end">
          <button
            className="px-6 py-2 border border-gray-800 text-gray-800 rounded-md
                       hover:bg-gray-800 hover:text-white transition"
            onClick={() => window.location.reload()}
          >
            Refresh Data
          </button>
        </div>
      </div>
    </section>
  );
};

export default DataPage;
