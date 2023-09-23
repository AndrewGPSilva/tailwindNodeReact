export default function Banner({image, extensao}) {
  return (
    <div
      id="containerBanner"
      className="flex containerBanner bg-cover h-96"
      style={{ backgroundImage: `url('/${image}.${extensao}'` }}
    ></div>
  );
}
