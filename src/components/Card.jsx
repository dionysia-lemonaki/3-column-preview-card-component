import Button from "./Button";

const Card = ({ variant, image, title, description }) => {
  return (
    <div className={`card card--${variant}`}>
      <img src={image} alt="" width="64" height="40" className="card__image" />
      <div className="card__content">
        <div className="card__intro">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
        </div>
        <Button variant={variant} />
      </div>
    </div>
  );
};

export default Card;
