import { Button } from '@/components/ui/button';
import { filters } from 'fabric'
import { RotateCcw } from 'lucide-react';
import React, { useState } from 'react'


const FILTER_CONFIGS = [
  {
    key: "brightness",
    label: "Brightness",
    min: -100,
    max: 100,
    step: 1,
    defaultValue: 0,
    filterClass: filters.Brightness,
    valueKey: "brightness",
    transform: (value) => value / 100,
  },
  {
    key: "contrast",
    label: "Contrast",
    min: -100,
    max: 100,
    step: 1,
    defaultValue: 0,
    filterClass: filters.Contrast,
    valueKey: "contrast",
    transform: (value) => value / 100,
  },
  {
    key: "saturation",
    label: "Saturation",
    min: -100,
    max: 100,
    step: 1,
    defaultValue: 0,
    filterClass: filters.Saturation,
    valueKey: "saturation",
    transform: (value) => value / 100,
  },
  {
    key: "vibrance",
    label: "Vibrance",
    min: -100,
    max: 100,
    step: 1,
    defaultValue: 0,
    filterClass: filters.Vibrance,
    valueKey: "vibrance",
    transform: (value) => value / 100,
  },
  {
    key: "blur",
    label: "Blur",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 0,
    filterClass: filters.Blur,
    valueKey: "blur",
    transform: (value) => value / 100,
  },
  {
    key: "hue",
    label: "Hue",
    min: -180,
    max: 180,
    step: 1,
    defaultValue: 0,
    filterClass: filters.HueRotation,
    valueKey: "rotation",
    transform: (value) => value * (Math.PI / 180),
    suffix: "°",
  },
];
const AdjustControls = () => {

    const [filterValues,setFilterValues]=useState()
    const resetFilters=()=>{

    }
  return (
    <div className='space-y-6'>
        {/* Reset */}
        <div className='flex justify-between items-center'>
            <h3 className='text-sm font-medium text-white'>Image Adjustments</h3>
            <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="text-white/70 hover:text-white"
            >
                <RotateCcw className='h-4 w-4 mr-2'/>
                Reset
            </Button>
        </div>
        {/* filters */}
        {
            FILTER_CONFIGS.map((config)=>{
                return (
                <div key={config.key} className='space-y-2'>
                    <div className='flex justify-between items-center'>
                        <label className='text-sm text-white'>{config.label}</label>
                    </div>
                </div>)
            })
        }
    </div>
  )
}

export default AdjustControls