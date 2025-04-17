"use client"

import { useState } from "react"
import { Plus, Trash2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"

type CastCrewMember = {
  id: string
  name: string
  role: string
  callTime: string
  contact: string
}

export function CastCrewSection() {
  const [castMembers, setCastMembers] = useState<CastCrewMember[]>([
    { id: "1", name: "", role: "cast", callTime: "", contact: "" },
  ])

  const [crewMembers, setCrewMembers] = useState<CastCrewMember[]>([
    { id: "1", name: "", role: "crew", callTime: "", contact: "" },
  ])

  const addCastMember = () => {
    setCastMembers([...castMembers, { id: Date.now().toString(), name: "", role: "cast", callTime: "", contact: "" }])
  }

  const addCrewMember = () => {
    setCrewMembers([...crewMembers, { id: Date.now().toString(), name: "", role: "crew", callTime: "", contact: "" }])
  }

  const removeCastMember = (id: string) => {
    if (castMembers.length > 1) {
      setCastMembers(castMembers.filter((member) => member.id !== id))
    }
  }

  const removeCrewMember = (id: string) => {
    if (crewMembers.length > 1) {
      setCrewMembers(crewMembers.filter((member) => member.id !== id))
    }
  }

  const updateCastMember = (id: string, field: keyof CastCrewMember, value: string) => {
    setCastMembers(castMembers.map((member) => (member.id === id ? { ...member, [field]: value } : member)))
  }

  const updateCrewMember = (id: string, field: keyof CastCrewMember, value: string) => {
    setCrewMembers(crewMembers.map((member) => (member.id === id ? { ...member, [field]: value } : member)))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <SectionHeader title="Cast & Crew" icon={<Users className="h-5 w-5" />} />
      </div>

      <Card className="shadow-sm bg-gray-50">
        <CardContent className="p-5 md:p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Cast</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={addCastMember}
              className="h-9 bg-black hover:bg-black/90 text-white border-none"
            >
              <Plus className="h-4 w-4 mr-1 text-white" />
              Add Cast
            </Button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-12 gap-3 text-sm font-medium text-muted-foreground px-2">
              <div className="col-span-6 md:col-span-3">Name</div>
              <div className="col-span-6 md:col-span-3">Character</div>
              <div className="col-span-6 md:col-span-2">Call Time</div>
              <div className="col-span-5 md:col-span-3">Contact</div>
              <div className="col-span-1 md:col-span-1"></div>
            </div>

            {castMembers.map((member) => (
              <div key={member.id} className="grid grid-cols-12 gap-3 items-center bg-white rounded-md p-3 shadow-sm">
                <div className="col-span-6 md:col-span-3">
                  <Input
                    value={member.name}
                    onChange={(e) => updateCastMember(member.id, "name", e.target.value)}
                    placeholder="Actor name"
                    className="h-10 focus-visible:ring-black"
                  />
                </div>
                <div className="col-span-6 md:col-span-3">
                  <Input
                    value={member.role === "cast" ? "" : member.role}
                    onChange={(e) => updateCastMember(member.id, "role", e.target.value)}
                    placeholder="Character name"
                    className="h-10 focus-visible:ring-black"
                  />
                </div>
                <div className="col-span-6 md:col-span-2 mt-3 md:mt-0">
                  <div className="time-input-wrapper">
                    <Input
                      type="time"
                      value={member.callTime}
                      onChange={(e) => updateCastMember(member.id, "callTime", e.target.value)}
                      className="modern-time-input pr-10"
                    />
                  </div>
                </div>
                <div className="col-span-5 md:col-span-3 mt-3 md:mt-0">
                  <Input
                    value={member.contact}
                    onChange={(e) => updateCastMember(member.id, "contact", e.target.value)}
                    placeholder="Phone number"
                    className="h-10 focus-visible:ring-black"
                  />
                </div>
                <div className="col-span-1 md:col-span-1 flex justify-end mt-3 md:mt-0">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeCastMember(member.id)}
                    disabled={castMembers.length <= 1}
                    className="h-10 w-10 hover:bg-[#7B00FF]/10 hover:text-[#7B00FF]"
                  >
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm bg-gray-50">
        <CardContent className="p-5 md:p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Crew</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={addCrewMember}
              className="h-9 bg-black hover:bg-black/90 text-white border-none"
            >
              <Plus className="h-4 w-4 mr-1 text-white" />
              Add Crew
            </Button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-12 gap-3 text-sm font-medium text-muted-foreground px-2">
              <div className="col-span-6 md:col-span-3">Name</div>
              <div className="col-span-6 md:col-span-3">Position</div>
              <div className="col-span-6 md:col-span-2">Call Time</div>
              <div className="col-span-5 md:col-span-3">Contact</div>
              <div className="col-span-1 md:col-span-1"></div>
            </div>

            {crewMembers.map((member) => (
              <div key={member.id} className="grid grid-cols-12 gap-3 items-center bg-white rounded-md p-3 shadow-sm">
                <div className="col-span-6 md:col-span-3">
                  <Input
                    value={member.name}
                    onChange={(e) => updateCrewMember(member.id, "name", e.target.value)}
                    placeholder="Crew member name"
                    className="h-10 focus-visible:ring-black"
                  />
                </div>
                <div className="col-span-6 md:col-span-3">
                  <Input
                    value={member.role === "crew" ? "" : member.role}
                    onChange={(e) => updateCrewMember(member.id, "role", e.target.value)}
                    placeholder="e.g., DP, Sound"
                    className="h-10 focus-visible:ring-black"
                  />
                </div>
                <div className="col-span-6 md:col-span-2 mt-3 md:mt-0">
                  <div className="time-input-wrapper">
                    <Input
                      type="time"
                      value={member.callTime}
                      onChange={(e) => updateCrewMember(member.id, "callTime", e.target.value)}
                      className="modern-time-input pr-10"
                    />
                  </div>
                </div>
                <div className="col-span-5 md:col-span-3 mt-3 md:mt-0">
                  <Input
                    value={member.contact}
                    onChange={(e) => updateCrewMember(member.id, "contact", e.target.value)}
                    placeholder="Phone number"
                    className="h-10 focus-visible:ring-black"
                  />
                </div>
                <div className="col-span-1 md:col-span-1 flex justify-end mt-3 md:mt-0">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeCrewMember(member.id)}
                    disabled={crewMembers.length <= 1}
                    className="h-10 w-10 hover:bg-[#7B00FF]/10 hover:text-[#7B00FF]"
                  >
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
