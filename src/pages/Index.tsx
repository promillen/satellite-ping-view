
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

        {/* Combined Location Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Recorded location</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <SatelliteMap />
            
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/f044fe18-dec5-4f90-bca5-6d9af8aaf601.png" 
                alt="Harbor scene with boat and drilling equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
