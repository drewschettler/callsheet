import { Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function EmergencySection() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Emergency Information" icon={<Phone className="h-5 w-5" />} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm bg-gray-50">
          <CardContent className="p-5 md:p-6 space-y-5">
            <h3 className="text-lg font-semibold">Emergency Contacts</h3>

            <div className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="production-manager" className="text-base font-medium">
                  Production Manager
                </Label>
                <Input
                  id="production-manager"
                  placeholder="Name & phone number"
                  className="h-10 focus-visible:ring-black"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="first-aid" className="text-base font-medium">
                  First Aid Officer
                </Label>
                <Input id="first-aid" placeholder="Name & phone number" className="h-10 focus-visible:ring-black" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="security" className="text-base font-medium">
                  Security
                </Label>
                <Input id="security" placeholder="Name & phone number" className="h-10 focus-visible:ring-black" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="emergency-services" className="text-base font-medium">
                  Emergency Services
                </Label>
                <Input
                  id="emergency-services"
                  placeholder="e.g., 911"
                  defaultValue="911"
                  className="h-10 focus-visible:ring-black"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm bg-gray-50">
          <CardContent className="p-5 md:p-6 space-y-5">
            <h3 className="text-lg font-semibold">Nearest Hospital</h3>

            <div className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="hospital-name" className="text-base font-medium">
                  Hospital Name
                </Label>
                <Input
                  id="hospital-name"
                  placeholder="e.g., City General Hospital"
                  className="h-10 focus-visible:ring-black"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="hospital-address" className="text-base font-medium">
                  Hospital Address
                </Label>
                <Textarea
                  id="hospital-address"
                  placeholder="Full address of nearest hospital"
                  className="min-h-[80px] focus-visible:ring-black"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label htmlFor="hospital-phone" className="text-base font-medium">
                    Hospital Phone
                  </Label>
                  <Input
                    id="hospital-phone"
                    placeholder="Hospital main number"
                    className="h-10 focus-visible:ring-black"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="hospital-distance" className="text-base font-medium">
                    Distance/Time
                  </Label>
                  <Input
                    id="hospital-distance"
                    placeholder="e.g., 3.2 miles / 12 min"
                    className="h-10 focus-visible:ring-black"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
