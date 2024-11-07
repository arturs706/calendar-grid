import { FC } from 'react';

interface GridRowProps {
    borderColor: string;
}

const CalendarGrid: FC = () => {
  const GridRow = ({ borderColor }: GridRowProps) => (
    <div
      className={`grid grid-cols-7 grid-rows-1 border-b ${borderColor} gap-0 w-full`}
    >
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className={`h-6 w-full ${i === 0 ? '' : 'border-l border-gray-150'} hover:bg-gray-100 cursor-pointer`}
        >
          {/** Grid text goes here */}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div>
        {Array.from({ length: 48 }).map((_, i) => (
          <GridRow
            key={i}
            borderColor={
              i === 47
                ? "transparent"
                : i % 2 === 0
                ? "border-gray-100"
                : "border-gray-300"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
