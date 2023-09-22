export default function Banner({image, extensao}) {
  return (
    <div
      className="flex containerBanner bg-cover h-96" id="containerBanner"
      style={{ backgroundImage: `url('/${image}.${extensao}'` }}
    ></div>
  );
}
