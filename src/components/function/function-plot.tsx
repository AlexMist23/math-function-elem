import { useEffect, useRef } from "react";
import functionPlot from "function-plot";
import { toast } from "@/hooks/use-toast";

interface FunctionPart {
  id: string;
  type: "continuous" | "point";
  fn?: string;
  range?: [number, number];
  point?: [number, number];
  color: string;
}

interface FunctionPlotProps {
  functionParts: FunctionPart[];
}

export function FunctionPlot({ functionParts }: FunctionPlotProps) {
  const plotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (plotRef.current && functionParts.length > 0) {
      try {
        functionPlot({
          target: plotRef.current,
          width: 600,
          height: 400,
          grid: true,
          xAxis: { domain: [-10, 10] },
          yAxis: { domain: [-10, 10] },
          data: functionParts.map((part) => {
            if (part.type === "continuous") {
              return {
                fn: part.fn,
                range: part.range,
                color: part.color,
              };
            } else {
              return {
                points: [part.point!],
                fnType: "points",
                graphType: "scatter",
                color: part.color,
              };
            }
          }),
        });
      } catch (error) {
        console.log(error);
        toast({
          title: "Error plotting function",
          description: "Please check your function definitions and try again.",
          variant: "destructive",
        });
      }
    }
  }, [functionParts]);

  return <div ref={plotRef} className="w-full h-[400px]" />;
}
