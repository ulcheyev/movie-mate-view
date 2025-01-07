import { Recommendation, Discover } from "@/components/home";

const HomePage = () => {
  return (
    <>
      <div className="text-4xl font-extrabold mb-4">Recommendations</div>
      <Recommendation />
      <div className="text-4xl font-extrabold mb-4 mt-10">Discover</div>
      <Discover />
    </>
  );
};

export default HomePage;
