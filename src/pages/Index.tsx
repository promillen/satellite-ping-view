
import SatelliteMap from "@/components/SatelliteMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Location View</h1>
          <p className="text-lg text-gray-600">Satellite imagery and ground-level photography of Copenhagen</p>
        </div>

        {/* Satellite Map Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Satellite View</CardTitle>
            <p className="text-gray-600">High-resolution satellite imagery from above</p>
          </CardHeader>
          <CardContent>
            <SatelliteMap />
          </CardContent>
        </Card>

        {/* User Photo Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Ground Level Photo</CardTitle>
            <p className="text-gray-600">User-submitted photograph taken at this location</p>
          </CardHeader>
          <CardContent>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop" 
                alt="Copenhagen street view - user submitted photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Photo taken by:</span> User<br/>
                <span className="font-semibold">Date:</span> Today<br/>
                <span className="font-semibold">Description:</span> Beautiful Copenhagen architecture and canal view
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
