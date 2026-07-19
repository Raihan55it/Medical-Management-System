type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const PatientSearch = ({ search, setSearch }: Props) => {
  return (
    <input
      type="text"
      placeholder="Search patient..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      className="w-full rounded-lg border px-3 py-2 dark:bg-gray-700 dark:text-white"
    />
  );
};
export default PatientSearch;
