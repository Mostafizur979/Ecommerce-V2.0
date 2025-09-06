"use client";
import { PulseLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex items-center justify-center">
      <PulseLoader 
        color="#0CB0E2" 
        size={12}        
        margin={2}       
      />
    </div>
  );
}