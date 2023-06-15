export default function ListColumn({ title }: { title: string }) {
  return (
    <>
      <th scope="col" className="px-6 py-3">
        {title}
      </th>
    </>
  );
}
