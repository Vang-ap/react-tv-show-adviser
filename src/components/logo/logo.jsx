import styleLogo from "./style.module.css";

export function Logo({ image, title, subtitle }) {
  return (
    <>
      <div className={styleLogo.container}>
        <img className={styleLogo.img} src={image} alt={title} />
        <div className={styleLogo.title}>{title}</div>
      </div>

      <div className={styleLogo.subtitle}>{subtitle}</div>
    </>
  );
}
