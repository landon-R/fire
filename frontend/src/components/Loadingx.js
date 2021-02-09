import spin from '../assets/spin2.gif'


export default function Loadingx() {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "600px" }}
    >
      <img className="h-40 w-40" src={spin} alt="loading" />
    </div>
  );
}
