import ValoRankCard from "./components/ValoRankCard";

export default function App() {
  return (
    <div className="w-full bg-blue-300 flex justify-center items-center">
      <div className="grid grid-cols-3 gap-10 gap-y-5">
        <ValoRankCard playerName={'PloyIIV'} />
        <ValoRankCard playerName={'Theim'} />
        <ValoRankCard playerName={'Iyne'} />
        <ValoRankCard playerName={'Thanos'} />
        <ValoRankCard playerName={'Nook'} />
        <ValoRankCard />
        <ValoRankCard />
        <ValoRankCard />
        <ValoRankCard />
      </div>
    </div>
  );
}
