interface BadgeProp {
  name: string;
}
export default function Badge({ name }: BadgeProp) {
  return <div className="badge">{name}</div>;
}
