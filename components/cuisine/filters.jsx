'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { X } from "lucide-react"

export default function Filters({ select, setSelect, setSearch }) {

    const handleClear = () => {
        setSelect('')
    }
    return (
        <div className="flex items-center gap-4">

            {select && <Button size='sm' variant='orangeNiCarmel' onClick={handleClear}>{select} <X /></Button>}

            <Select value={select} onValueChange={(value) => setSelect(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="Easy">Easy</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Hard">Hard</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Input placeholder="Search by keyword" onChange={(e) => setSearch(e.target.value)} />

        </div>
    )
}
