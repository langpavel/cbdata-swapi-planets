export type TextCellProps = {
  value: string | null | undefined;
  className?: string;
};

/**
 * A table cell component for the text value.
 */
export function TextCell({ value, className }: TextCellProps) {
  return (
    <td className={className}>
      {value ?? ""}
    </td>
  );
}
