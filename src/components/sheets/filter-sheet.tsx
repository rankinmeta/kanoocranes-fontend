import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import FilterContent from './filter-content'

const FilterSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <Button className="md:hidden bg-transparent border-secondary text-secondary justify-between">Filter <ChevronRight /></Button>
      </SheetTrigger>
      <SheetContent className='z-999'>
        <div className='px-6 py-10'>
            <FilterContent />
            <Button className='mt-4'>Apply Filters</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default FilterSheet