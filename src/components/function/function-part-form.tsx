import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface FunctionPart {
  id: string;
  type: "continuous" | "point";
  fn?: string;
  range?: [number, number];
  point?: [number, number];
  color: string;
}

interface FunctionPartFormProps {
  onAddPart: (part: Omit<FunctionPart, "id">) => void;
  editingPart: Omit<FunctionPart, "id"> | null;
  onUpdatePart: (part: Omit<FunctionPart, "id">) => void;
}

export function FunctionPartForm({
  onAddPart,
  editingPart,
  onUpdatePart,
}: FunctionPartFormProps) {
  const [newPart, setNewPart] = useState<Omit<FunctionPart, "id">>(
    editingPart || {
      type: "continuous",
      fn: "",
      range: [0, 0],
      color: "hsl(var(--chart-1))",
    }
  );

  const handleSubmit = () => {
    if (newPart.type === "continuous" && (!newPart.fn || !newPart.range)) {
      toast({
        title: "Invalid function part",
        description:
          "Please provide both a function and a range for continuous functions.",
        variant: "destructive",
      });
      return;
    }
    if (newPart.type === "point" && !newPart.point) {
      toast({
        title: "Invalid function part",
        description: "Please provide a point for point functions.",
        variant: "destructive",
      });
      return;
    }
    if (editingPart) {
      onUpdatePart(newPart);
    } else {
      onAddPart(newPart);
    }
    setNewPart({
      type: "continuous",
      fn: "",
      range: [0, 0],
      color: "hsl(var(--chart-1))",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Label className="flex items-center">
          <Input
            type="radio"
            checked={newPart.type === "continuous"}
            onChange={() => setNewPart({ ...newPart, type: "continuous" })}
            className="mr-2"
          />
          Continuous
        </Label>
        <Label className="flex items-center">
          <Input
            type="radio"
            checked={newPart.type === "point"}
            onChange={() => setNewPart({ ...newPart, type: "point" })}
            className="mr-2"
          />
          Point
        </Label>
      </div>
      {newPart.type === "continuous" ? (
        <>
          <div className="space-y-2">
            <Label htmlFor="function">
              Function {'(e.g., "x^2", "sin(x)")'}
            </Label>
            <Input
              id="function"
              value={newPart.fn}
              onChange={(e) => setNewPart({ ...newPart, fn: e.target.value })}
              placeholder="Enter function"
            />
          </div>
          <div className="flex space-x-4">
            <div className="space-y-2">
              <Label htmlFor="rangeStart">Range Start</Label>
              <Input
                id="rangeStart"
                type="number"
                value={newPart.range?.[0]}
                onChange={(e) =>
                  setNewPart({
                    ...newPart,
                    range: [
                      parseFloat(e.target.value),
                      newPart.range?.[1] || 0,
                    ],
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rangeEnd">Range End</Label>
              <Input
                id="rangeEnd"
                type="number"
                value={newPart.range?.[1]}
                onChange={(e) =>
                  setNewPart({
                    ...newPart,
                    range: [
                      newPart.range?.[0] || 0,
                      parseFloat(e.target.value),
                    ],
                  })
                }
              />
            </div>
          </div>
        </>
      ) : (
        <div className="flex space-x-4">
          <div className="space-y-2">
            <Label htmlFor="pointX">X Coordinate</Label>
            <Input
              id="pointX"
              type="number"
              value={newPart.point?.[0]}
              onChange={(e) =>
                setNewPart({
                  ...newPart,
                  point: [parseFloat(e.target.value), newPart.point?.[1] || 0],
                })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pointY">Y Coordinate</Label>
            <Input
              id="pointY"
              type="number"
              value={newPart.point?.[1]}
              onChange={(e) =>
                setNewPart({
                  ...newPart,
                  point: [newPart.point?.[0] || 0, parseFloat(e.target.value)],
                })
              }
            />
          </div>
        </div>
      )}
      <Button onClick={handleSubmit}>
        {editingPart ? "Update Function Part" : "Add Function Part"}
      </Button>
    </div>
  );
}
