interface PlanetProps {
  name: string;
  img: string;
  className: string;
}

export const Planet = ({ name, img, className }: PlanetProps) => {
  return (
    <div className={className}>
      <img src={img} alt={name} className="h-[130%] w-[130%]" />
    </div>
  );
};
