"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

type Point = {
  x: number;
  y: number;
};

const chartConfig: ChartConfig = {
  function: {
    label: "f(x)",
    color: "hsl(var(--chart-1))",
  },
};

export default function LinearFunctionDisplay() {
  const [equation, setEquation] = useState("");
  const [points, setPoints] = useState<Point[]>([]);
  const [currentEquation, setCurrentEquation] = useState("");

  const validateEquation = (eq: string): boolean => {
    const regex = /^y\s*=\s*(-?\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)?$/;
    return regex.test(eq);
  };

  const parseEquation = (eq: string): { m: number; b: number } => {
    const [, m, b] =
      eq.match(/^y\s*=\s*(-?\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)?$/) || [];
    return {
      m: parseFloat(m) || 0,
      b: b ? parseFloat(b.replace(/\s/g, "")) : 0,
    };
  };

  const generatePoints = (m: number, b: number): Point[] => {
    const newPoints: Point[] = [];
    for (let x = -10; x <= 10; x++) {
      const y = m * x + b;
      newPoints.push({ x, y });
    }
    return newPoints;
  };

  const handlePlot = () => {
    if (!validateEquation(equation)) {
      toast({
        title: "Invalid equation format",
        description: "Please enter the equation in the form y = mx + b",
        variant: "destructive",
      });
      return;
    }

    const { m, b } = parseEquation(equation);
    const newPoints = generatePoints(m, b);
    setPoints(newPoints);
    setCurrentEquation(equation);
  };

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Linear Function Display</CardTitle>
        <CardDescription>
          Enter a linear function equation to plot
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="equation">Linear Function Equation</Label>
          <div className="flex space-x-2">
            <Input
              id="equation"
              placeholder="Enter equation (e.g., y = 2x + 1)"
              value={equation}
              onChange={(e) => setEquation(e.target.value)}
            />
            <Button onClick={handlePlot}>Plot</Button>
          </div>
        </div>
        {points.length > 0 && (
          <ChartContainer config={chartConfig} className="h-[300px]">
            <LineChart
              data={points}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="x"
                type="number"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                dataKey="y"
                type="number"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="y"
                stroke="var(--color-function)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        )}
      </CardContent>
      {currentEquation && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="font-medium leading-none">
            Current equation: {currentEquation}
          </div>
          <div className="leading-none text-muted-foreground">
            Showing function plot for x values from -10 to 10
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
