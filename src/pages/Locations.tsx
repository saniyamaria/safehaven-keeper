
import Navbar from "@/components/layout/Navbar";
import LocationHistory from "@/components/locations/LocationHistory";

const Locations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Locations</h1>
        
        <LocationHistory />
      </main>
    </div>
  );
};

export default Locations;
