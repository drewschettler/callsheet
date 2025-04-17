"use client"

import { Calendar, CloudSun } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader } from "@/components/section-header"

interface ProjectDetailsSectionProps {
  date: string
  setDate: (date: string) => void
}

export function ProjectDetailsSection({ date, setDate }: ProjectDetailsSectionProps) {
  return (
    <div className="space-y-6">
      <SectionHeader title="Production Details" icon={<Calendar className="h-5 w-5" />} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm bg-gray-50">
          <CardContent className="p-5 md:p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-3">
                <Label htmlFor="project-title" className="text-base font-medium">
                  Project Title
                </Label>
                <Input id="project-title" placeholder="Enter project title" className="h-10 focus-visible:ring-black" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="call-date" className="text-base font-medium">
                  Production Date
                </Label>
                <div className="date-input-wrapper">
                  <Input
                    id="call-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="modern-date-input pr-10"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-3">
                <Label htmlFor="director" className="text-base font-medium">
                  Director
                </Label>
                <Input id="director" placeholder="Director name" className="h-10 focus-visible:ring-black" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="producer" className="text-base font-medium">
                  Producer
                </Label>
                <Input id="producer" placeholder="Producer name" className="h-10 focus-visible:ring-black" />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="meal-times" className="text-base font-medium">
                Meal Times
              </Label>
              <Input
                id="meal-times"
                placeholder="e.g., Breakfast: 8:00 AM, Lunch: 1:00 PM"
                className="h-10 focus-visible:ring-black"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm bg-gray-50">
          <CardContent className="p-5 md:p-6 space-y-5">
            <div className="space-y-3">
              <Label className="text-base font-medium flex items-center gap-2">
                <CloudSun className="h-4 w-4 text-[#7B00FF]" />
                Weather Forecast
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Input placeholder="Temperature" className="h-10 focus-visible:ring-black" />
                <Input placeholder="Conditions" className="h-10 focus-visible:ring-black" />
                <Input placeholder="Sunrise/Sunset" className="h-10 focus-visible:ring-black" />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="notes" className="text-base font-medium">
                Notes & Special Instructions
              </Label>
              <Textarea
                id="notes"
                placeholder="Enter any special instructions or notes for the crew"
                className="min-h-[120px] focus-visible:ring-black"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
