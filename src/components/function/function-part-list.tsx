import { Button } from "@/components/ui/button";
import { Trash2, Edit } from "lucide-react";

interface FunctionPart {
  id: string;
  type: "continuous" | "point";
  fn?: string;
  range?: [number, number];
  point?: [number, number];
  color: string;
}

interface FunctionPartListProps {
  parts: FunctionPart[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function FunctionPartList({
  parts,
  onEdit,
  onDelete,
}: FunctionPartListProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Added Function Parts</h3>
      {parts.map((part) => (
        <div
          key={part.id}
          className="flex items-center justify-between p-2 border rounded"
        >
          <span>
            {part.type === "continuous"
              ? `f(x) = ${part.fn}, x ∈ [${part.range?.[0]}, ${part.range?.[1]}]`
              : `Point (${part.point?.[0]}, ${part.point?.[1]})`}
          </span>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onEdit(part.id)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onDelete(part.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
