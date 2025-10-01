"use client";

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { SCHEDULE_DATA, INSTRUMENT_COLORS, INSTRUMENTS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { PageHeader } from '@/components/page-header';
import { AnimatedWrapper } from '@/components/animated-wrapper';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function SchedulePage() {
  const [filter, setFilter] = useState('All');

  const getSlotClass = (slotText: string) => {
    if (!slotText) return '';
    const instrument = slotText.split(' ')[0];
    const availability = slotText.match(/\((.*?)\)/)?.[1];
    
    let baseClass = INSTRUMENT_COLORS[instrument] || 'bg-gray-200 text-gray-800';
    
    if (availability === 'Full') {
      baseClass += ' opacity-50 line-through';
    } else if (availability === 'Limited') {
      baseClass += ' animate-pulse';
    }
    
    return baseClass;
  };
  
  const isVisible = (slotText: string) => {
    if (filter === 'All' || !slotText) return true;
    return slotText.toLowerCase().includes(filter.toLowerCase());
  }

  return (
    <>
      <PageHeader
        title="Weekly Timetable"
        description="Find the perfect time for your music class. Filter by instrument to see available slots."
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <AnimatedWrapper>
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
            <Select onValueChange={setFilter} defaultValue={filter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Filter by instrument" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Instruments</SelectItem>
                {INSTRUMENTS.map(inst => (
                  <SelectItem key={inst.name} value={inst.name}>{inst.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className='w-full sm:w-auto'>
              <Download className="mr-2 h-4 w-4" />
              Download PDF Timetable
            </Button>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.2}>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[150px] font-headline">Time</TableHead>
                  {DAYS.map(day => (
                    <TableHead key={day} className='text-center font-headline'>{day}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {SCHEDULE_DATA.map((row) => (
                  <TableRow key={row.time}>
                    <TableCell className="font-medium">{row.time}</TableCell>
                    {DAYS.map(day => (
                      <TableCell key={day} className='p-1'>
                        {row[day] && isVisible(row[day] as string) && (
                          <div className={cn(
                            "rounded-md p-2 text-center text-xs font-semibold h-full flex items-center justify-center",
                            getSlotClass(row[day] as string)
                          )}>
                            {(row[day] as string).split(' (')[0]}
                            <span className="hidden md:inline ml-1">({(row[day] as string).match(/\((.*?)\)/)?.[1]})</span>
                          </div>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </AnimatedWrapper>
      </div>
    </>
  );
}
