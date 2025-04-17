"use client"

import { useState } from "react"
import { FileText, Printer, Save, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ProjectDetailsSection } from "@/components/project-details-section"
import { CastCrewSection } from "@/components/cast-crew-section"
import { ScheduleSection } from "@/components/schedule-section"
import { LocationSection } from "@/components/location-section"
import { EmergencySection } from "@/components/emergency-section"

export function CallSheetPage() {
  const [date, setDate] = useState<string>(new Date().toISOString().split("T")[0])

  return (
    <div className="flex flex-col h-screen">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto p-4 md:py-8 md:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#7B00FF]/10 p-2 rounded-md">
              <FileText className="h-6 w-6 text-[#7B00FF]" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Call Sheet</h1>
              <p className="text-sm text-muted-foreground">Production Day {date}</p>
            </div>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.print()}
              className="flex-1 sm:flex-none border-black hover:bg-black/5 h-10"
            >
              <Printer className="mr-2 h-4 w-4 text-[#7B00FF]" />
              Print
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: "Call Sheet",
                      text: `Call Sheet for Production Day ${date}`,
                      url: window.location.href,
                    })
                    .catch((err) => console.error("Error sharing:", err))
                } else {
                  // Fallback for browsers that don't support the Web Share API
                  const url = window.location.href
                  navigator.clipboard
                    .writeText(url)
                    .then(() => alert("Link copied to clipboard!"))
                    .catch((err) => console.error("Error copying to clipboard:", err))
                }
              }}
              className="flex-1 sm:flex-none border-black hover:bg-black/5 h-10"
            >
              <Share2 className="mr-2 h-4 w-4 text-[#7B00FF]" />
              Share
            </Button>
            <Button size="sm" className="flex-1 sm:flex-none bg-black hover:bg-black/90 h-10">
              <Save className="mr-2 h-4 w-4 text-white" />
              Save
            </Button>
          </div>
        </div>
      </header>

      <ScrollArea className="flex-1 overflow-auto">
        <div className="container mx-auto p-5 md:px-10 space-y-10 pb-20">
          <ProjectDetailsSection date={date} setDate={setDate} />
          <Separator className="my-8" />
          <ScheduleSection />
          <Separator className="my-8" />
          <CastCrewSection />
          <Separator className="my-8" />
          <LocationSection />
          <Separator className="my-8" />
          <EmergencySection />
        </div>
      </ScrollArea>
    </div>
  )
}
