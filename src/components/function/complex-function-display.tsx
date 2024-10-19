"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FunctionPartForm } from "./function-part-form";
import { FunctionPartList } from "./function-part-list";
import { FunctionPlot } from "./function-plot";

interface FunctionPart {
  id: string;
  type: "continuous" | "point";
  fn?: string;
  range?: [number, number];
  point?: [number, number];
  color: string;
}

export default function ComplexFunctionDisplay() {
  const [functionParts, setFunctionParts] = useState<FunctionPart[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddPart = (newPart: Omit<FunctionPart, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setFunctionParts([...functionParts, { ...newPart, id }]);
  };

  const handleEditPart = (id: string) => {
    setEditingId(id);
  };

  const handleUpdatePart = (updatedPart: Omit<FunctionPart, "id">) => {
    setFunctionParts(
      functionParts.map((part) =>
        part.id === editingId ? { ...updatedPart, id: editingId } : part
      )
    );
    setEditingId(null);
  };

  const handleDeletePart = (id: string) => {
    setFunctionParts(functionParts.filter((part) => part.id !== id));
  };

  const editingPart = editingId
    ? functionParts.find((part) => part.id === editingId)
    : null;

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Complex Function Display</CardTitle>
        <CardDescription>
          Define a piecewise function with continuous parts and individual
          points
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FunctionPartForm
          onAddPart={handleAddPart}
          editingPart={editingPart || null}
          onUpdatePart={handleUpdatePart}
        />
        <FunctionPartList
          parts={functionParts}
          onEdit={handleEditPart}
          onDelete={handleDeletePart}
        />
        <FunctionPlot functionParts={functionParts} />
      </CardContent>
    </Card>
  );
}
