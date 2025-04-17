import React from "react";
import { CopyButton } from "./CopyButton";
import { Terminal, Wifi } from "lucide-react";

export function ATMCard({ name, serviceNumber, wanIP }) {
  return (
    <div
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 
                    hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <div className="bg-primary/10 p-2 rounded-lg">
          <Terminal className="h-5 w-5 text-primary" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500 mb-1">Service Number</div>
          <div className="font-mono text-lg font-medium text-gray-900">
            {serviceNumber}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
          <Wifi className="h-5 w-5 text-gray-400" />
          <div>
            <div className="text-sm text-gray-500">WAN IP</div>
            <div className="font-mono text-gray-900">{wanIP}</div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <CopyButton text={serviceNumber} />
      </div>
    </div>
  );
}
