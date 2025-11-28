import { Upload, FileText, Calendar, Download, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const recentReports = [
  {
    id: 1,
    name: "Mammography Report",
    date: "2024-01-15",
    type: "Screening",
    status: "Normal",
    doctor: "Dr. Sarah Johnson"
  },
  {
    id: 2,
    name: "Ultrasound Results",
    date: "2024-01-10",
    type: "Follow-up",
    status: "Review Required",
    doctor: "Dr. Emily Chen"
  },
  {
    id: 3,
    name: "Blood Work Panel",
    date: "2024-01-05",
    type: "Routine",
    status: "Normal",
    doctor: "Dr. Michael Davis"
  }
];

export function MedicalReports() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <Card className="border-2 border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-[#FFB6C1]" />
              <span>Medical Reports & History</span>
            </div>
            <Button className="bg-[#FFB6C1] hover:bg-[#FF91A4] text-white">
              <Upload className="h-4 w-4 mr-2" />
              Upload New Report
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upload Section */}
            <div className="lg:col-span-1">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#FFB6C1] transition-colors">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <h3 className="font-medium text-gray-900 mb-2">Upload Reports</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Drag and drop your medical reports or click to browse
                </p>
                <Button variant="outline" className="w-full">
                  Choose Files
                </Button>
              </div>
            </div>

            {/* Recent Reports */}
            <div className="lg:col-span-2">
              <h3 className="font-medium text-gray-900 mb-4">Recent Reports</h3>
              <div className="space-y-3">
                {recentReports.map((report) => (
                  <div 
                    key={report.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-gray-500" />
                      <div>
                        <h4 className="font-medium text-gray-900">{report.name}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(report.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{report.doctor}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge 
                        variant={report.status === "Normal" ? "secondary" : "destructive"}
                        className={report.status === "Normal" ? "bg-green-100 text-green-800" : ""}
                      >
                        {report.status}
                      </Badge>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}