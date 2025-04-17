import { MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function LocationSection() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Location Details" icon={<MapPin className="h-5 w-5" />} />

      <Card className="shadow-sm bg-gray-50">
        <CardContent className="p-5 md:p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-3">
              <Label htmlFor="location-name" className="text-base font-medium">
                Location Name
              </Label>
              <Input id="location-name" placeholder="e.g., City Park" className="h-10 focus-visible:ring-black" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="location-contact" className="text-base font-medium">
                Location Contact
              </Label>
              <Input
                id="location-contact"
                placeholder="Contact name & number"
                className="h-10 focus-visible:ring-black"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="address" className="text-base font-medium">
              Address
            </Label>
            <Textarea
              id="address"
              placeholder="Full address of filming location"
              className="min-h-[80px] focus-visible:ring-black"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="parking" className="text-base font-medium">
              Parking Instructions
            </Label>
            <Textarea
              id="parking"
              placeholder="Where to park, permits required, etc."
              className="min-h-[80px] focus-visible:ring-black"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
