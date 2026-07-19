type Props = {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

const PatientSort = ({ sortBy, setSortBy }: Props) => {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="rounded-lg border px-3 py-2 dark:bg-gray-700 dark:text-white"
    >
      <option value="Latest">Latest Added</option>
      <option value="oldest">Oldest Added</option>
      <option value="name-asc">Name (A-Z)</option>
      <option value="name-desc">Name (Z-A)</option>
      <option value="age-asc">Age (Low-High)</option>
      <option value="age-desc">Age (High-Low)</option>
    </select>
  );
};
export default PatientSort;
