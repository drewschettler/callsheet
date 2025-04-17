"use client"

import { useState } from "react"
import { Calendar, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"

type ScheduleItem = {
  id: string
  sceneNumber: string
  startTime: string
  endTime: string
  description: string
}

export function ScheduleSection() {
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([
    { id: "1", sceneNumber: "", startTime: "", endTime: "", description: "" },
  ])

  const addScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      { id: Date.now().toString(), sceneNumber: "", startTime: "", endTime: "", description: "" },
    ])
  }

  const removeScheduleItem = (id: string) => {
    if (scheduleItems.length > 1) {
      setScheduleItems(scheduleItems.filter((item) => item.id !== id))
    }
  }

  const updateScheduleItem = (id: string, field: keyof ScheduleItem, value: string) => {
    setScheduleItems(scheduleItems.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <SectionHeader title="Shooting Schedule" icon={<Calendar className="h-5 w-5" />} />
        <Button
          variant="outline"
          size="sm"
          onClick={addScheduleItem}
          className="h-9 bg-black hover:bg-black/90 text-white border-none"
        >
          <Plus className="h-4 w-4 mr-1 text-white" />
          Add Scene
        </Button>
      </div>

      <Card className="shadow-sm bg-gray-50">
        <CardContent className="p-5 md:p-6 space-y-4">
          <div className="grid grid-cols-12 gap-3 text-sm font-medium text-muted-foreground px-2">
            <div className="col-span-3 md:col-span-1">Scene #</div>
            <div className="col-span-4 md:col-span-2">Start Time</div>
            <div className="col-span-4 md:col-span-2">End Time</div>
            <div className="col-span-12 md:col-span-6 mt-2 md:mt-0">Description</div>
            <div className="col-span-1 md:col-span-1"></div>
          </div>

          {scheduleItems.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-3 items-start bg-white rounded-md p-3 shadow-sm">
              <div className="col-span-3 md:col-span-1">
                <Input
                  value={item.sceneNumber}
                  onChange={(e) => updateScheduleItem(item.id, "sceneNumber", e.target.value)}
                  placeholder="1A"
                  className="h-10 focus-visible:ring-black"
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <div className="time-input-wrapper">
                  <Input
                    type="time"
                    value={item.startTime}
                    onChange={(e) => updateScheduleItem(item.id, "startTime", e.target.value)}
                    className="modern-time-input pr-10"
                  />
                </div>
              </div>
              <div className="col-span-4 md:col-span-2">
                <div className="time-input-wrapper">
                  <Input
                    type="time"
                    value={item.endTime}
                    onChange={(e) => updateScheduleItem(item.id, "endTime", e.target.value)}
                    className="modern-time-input pr-10"
                  />
                </div>
              </div>
              <div className="col-span-11 md:col-span-6 mt-3 md:mt-0">
                <Textarea
                  value={item.description}
                  onChange={(e) => updateScheduleItem(item.id, "description", e.target.value)}
                  placeholder="Brief scene description"
                  className="min-h-[60px] md:min-h-[60px] focus-visible:ring-black"
                />
              </div>
              <div className="col-span-1 md:col-span-1 flex justify-end mt-3 md:mt-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeScheduleItem(item.id)}
                  disabled={scheduleItems.length <= 1}
                  className="h-10 w-10 hover:bg-[#7B00FF]/10 hover:text-[#7B00FF]"
                >
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
